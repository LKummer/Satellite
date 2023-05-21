+++
title = "How to build a multi-version site"
+++

This guide goes through building a multi-version Satellite site from a Git repository versioned with Git tags.

## Requirements

- Satellite site inside a Git repository, versioned with Git tags.
- Git installed.
- Hugo `v0.109.0` or later installed.
- Python installed. The build script was developed against Python 3.10 but slightly older versions should work.

This guide assumes you are working on Linux.
On Windows you may need to run `python` instead of `python3`.

## Downloading the Build Script

Download [the multi-version build script from Satellite's GitHub repository](https://raw.githubusercontent.com/LKummer/Satellite/master/build.py).

```
wget https://raw.githubusercontent.com/LKummer/Satellite/master/build.py
```

You should now have the `build.py` file containing the build script.

## Building the Site

This guide assumes your site's Git repository is hosted at `github.com/LKummer/example`, and you wish to build a pages site for it in the URL `lkummer.github.io/example`.
Change the URLs in the following command to fit your site.

Run the following command to build the Satellite site versioned with the Git tags of the repository:

```
python3 build.py --base-url http://lkummer.github.io/example https://github.com/LKummer/example.git
```

You can see the built multi-version site in the `build_output` directory.
It can be hosted like any static site.

## More Options

If your site is not at the root of the repository, you wish to only build some of the tags, or want to change the output directory, check out the build script's help:

```
python3 build.py --help
```
