+++
title = "How to deploy to GitHub Pages"
+++

This guide goes through deploying a Satellite site automatically with GitHub Actions on GitHub Pages.

## Requirements

- Git repo with Satellite site in it's root directory. Hosted on GitHub.

## Creating a CI Pipeline

This guide assumes your site will be hosted at `lkummer.github.io/example`.
Modify the pipeline to the URL of your Pages site.

Create a `.github/workflows/deploy.yml` file, and paste the following content in it:

```yaml
on: push

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: https://lkummer.github.io/example
    steps:
      - uses: actions/checkout@v3
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.111.3'
      - run: hugo --baseURL https://lkummer.github.io/example
      - uses: actions/upload-pages-artifact@v1
        with:
          path: public
      - uses: actions/deploy-pages@v2
```

Add the file to Git, and commit it:

```
git add .github/workflows/deploy.yml
git commit
```

## Running the Pipeline

To run the pipeline and deploy the site, push the commit created in the previous step:

```
git push
```

Open GitHub, you should be able to see the pipeline running.
Once the pipeline succeeds, you may see your site in GitHub Pages.

On GitHub, in your repository's page: Go to the `github-pages` environment, and click "View deploymnet" to see your Pages site.
