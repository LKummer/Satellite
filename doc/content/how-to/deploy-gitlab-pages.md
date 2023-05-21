+++
title = "How to deploy to GitLab Pages"
+++

This guide goes through deploying a Satellite site automatically with GitLab CI on GitLab Pages.

## Requirements

- Git repo with Satellite site in it's root directory. Hosted on GitLab (either SaaS or self-managed).

Note that when using self-managed GitLab, you must have GitLab Pages and a GitLab CI runner set up.

## Creating a CI Pipeline

Create a `.gitlab-ci.yml` file, and paste the following content in it:

```yml
stages:
  - deploy

pages:
  stage: deploy
  image: debian:bullseye
  script:
    - apt-get update
    - apt-get install --yes wget
    - wget -O /tmp/hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.111.3/hugo_0.111.3_linux-amd64.tar.gz
    - mkdir /tmp/hugo
    - tar -xzf /tmp/hugo.tar.gz -C /tmp/hugo
    - mv /tmp/hugo/hugo /usr/local/bin
    - hugo --baseURL "${CI_PAGES_URL}"
  artifacts:
    paths:
      - public
```

Add the file to Git, and commit it:

```
git add .gitlab-ci.yml
git commit
```

## Running the Pipeline

To run the pipeline and deploy the site, push the commit created in the previous step:

```
git push
```

Open GitLab, you should be able to see the pipeline running.
Once the pipeline succeeds, you may see your site in GitLab Pages.

On GitLab, in your repository's page: Go to Settings, then Pages.
You should see a link to your Pages site.
Open the link to see your Pages site.
