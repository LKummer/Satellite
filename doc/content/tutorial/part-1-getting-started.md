+++
title = "Part 1 - Getting Started"
+++

By the end of this tutorial you will have a Satellite site with a page of your
own content ready to deploy.

In this part of the tutorial we will set up a Hugo site with Satellite.

## Requirements

You need a computer with Hugo installed to complete this guide.

If you do not have Hugo installed, follow [the installation guide for your system.](https://gohugo.io/installation/)
Use Hugo `v0.109.0` or later for the best experience.

## Creating a Satellite Site

Head over [to the latest release](https://github.com/LKummer/Satellite/releases/latest) and download a `quickstart-site` archive.
Create a new folder for your site to reside in.
Extract the contents of the `quickstart-site` archive in your site's folder.

You should now have a working Hugo site.
Try building the site by running the following command:

```
hugo
```

We may have a built site, but it's not yet ready to deploy.
We still have some configuration left to do.

## Basic Satellite Configuration

Open `config.toml` in your site's folder.
Edit `title` to your site's name.
Remove `menu.main` or change it's entries to suit your needs.

Change `baseURL` to the base URL of your site.
When using GitHub Pages, it should be `https://<username>.github.io/<repository>`.
When using GitLab Pages, it should be `https://<username>.gitlab.io/<repository>`.

The `config.toml` file is where all Satellite configuration happens.
Check out the reference section for more information about Satellite's config options.

To ensure nothing went wrong during this step, try building the site by running the following command:

```
hugo
```

Now our site is ready to deploy, but it's still just the demo site.
We need to add our own content.

In the next part we will be adding our own content.
[Go to part 2.]({{< relref "part-2-adding-content" >}})
