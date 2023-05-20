from tempfile import TemporaryDirectory
from pathlib import Path
from shutil import copytree, rmtree
from subprocess import run
from json import dump
from typing import List, Optional
from argparse import ArgumentParser


def clone(repo_url: str, location: Path):
    run(
        ["git", "clone", repo_url, location.as_posix()], check=True, capture_output=True
    )


def copy_site(repo: Path, site_subdir: str, site_path: Path):
    copytree(repo / site_subdir, site_path)


def get_tags(repo: Path, contains: Optional[str]) -> List[str]:
    if contains:
        tag_result = run(
            ["git", "tag", "--contains", contains],
            cwd=repo.as_posix(),
            check=True,
            capture_output=True,
            text=True,
        )
        tags = tag_result.stdout.splitlines()
        tags.reverse()
        return tags
    else:
        tag_result = run(["git", "tag"], check=True, capture_output=True, text=True)
        tags = tag_result.stdout.splitlines()
        tags.reverse()
        return tags


def create_versions_manifest(tags: List[str], current_tag: int, manifest_path: Path):
    versions = [{"path": tag, "title": tag} for tag in tags]
    latest = tags[0]
    versions.insert(0, {"title": latest, "label": "Latest"})
    manifest = {"current": current_tag, "versions": versions}
    with manifest_path.open("w") as manifest_file:
        dump(manifest, manifest_file)


def switch(repo: Path, tag: str):
    run(["git", "checkout", tag], cwd=repo.as_posix(), check=True)


def copy_content(repo: Path, site_subdir: str, site_path: Path):
    rmtree(site_path / "content")
    copytree((repo / site_subdir) / "content", site_path / "content")


def build(site_dir: Path, base_url: str, current_tag: str):
    run(
        [
            "hugo",
            "--baseURL",
            f"{base_url}/{current_tag}",
            "--destination",
            f"public/{current_tag}",
        ],
        cwd=site_dir.as_posix(),
        check=True,
    )


def main():
    parser = ArgumentParser(
        description="Build multi-version Satellite sites from Git tags."
    )
    parser.add_argument("repository", help="Git repository to build from")
    parser.add_argument(
        "--subdir", default=".", help="Hugo site subdirectory in Git repo"
    )
    parser.add_argument("--start", help="Git tag or commit to start at")
    parser.add_argument(
        "--base-url", required=True, help="Base URL to build the site for"
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("build_output"),
        help="Output directory",
    )
    args = parser.parse_args()

    repo_url = args.repository
    site_subdir = args.subdir
    includes = args.start
    base_url = args.base_url.removesuffix("/")
    output = args.output
    with TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir)
        clone(repo_url, temp_path / "repo")
        copy_site(temp_path / "repo", site_subdir, temp_path / "site")
        tags = get_tags(temp_path / "repo", includes)

        (temp_path / "site/data").mkdir()
        create_versions_manifest(tags, 0, temp_path / "site/data/versions.json")
        build(temp_path / "site", base_url, "")

        for index, tag in enumerate(tags):
            create_versions_manifest(
                tags, index + 1, temp_path / "site/data/versions.json"
            )
            switch(temp_path / "repo", tag)
            copy_content(temp_path / "repo", site_subdir, temp_path / "site")
            build(temp_path / "site", base_url, tag)

        copytree(temp_path / "site/public", output)


if __name__ == "__main__":
    main()
