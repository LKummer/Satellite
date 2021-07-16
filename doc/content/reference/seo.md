+++
title = "Search Engine Optimizations"
+++

Do you need Google enhanced search results and enhanced social media sharing?
This page documents Satelite's SEO related configuration options.

## General

The `title` and `params.seo.description` configuration options can be used to set
a title and description for your website.

```toml
title = "Satelite"

[params]
[params.seo]
  description = "Satelite Hugo theme demo."
```

In content pages, the title and description of the current page are used.

## Twitter and Facebook

Twitter and facebook allow specifying an image for your website.
Additionally, Twitter allows choosing card types.

Twitter card can be chosen with `params.seo.twitterCard`, it can be set to
`summary`, `summary_large_image`, `app` or `player`.

Use `params.seo.images.ogPath`, `params.seo.images.ogHeight` and
`params.seo.images.ogWidth` to the preferred image for your website.
Make sure to place your image in the `static/` folder. The example below uses an
image in a `static/images/` folder.

```
[params]
[params.seo]
  twitterCard = "summary"
  [params.seo.images]
    ogPath = "images/image.png"
    ogHeight = "1080"
    ogWidth = "1920"
```

## Google

Google allows specifying multiple images for your page.
For best results, use images at least 1200 pixels wide and in 1x1, 4x3 and 16x9
aspect ratios.

Use the `params.seo.images.ldPaths` array to specify your preferred images.
Make sure to place your images in the `static/` folder. The example below uses
images in a `static/images/` folder.

```toml
[params]
[params.seo]
  [params.seo.images]
    ldPaths = [
      "images/image-1x1.png",
      "images/image-4x3.png",
      "images/image-16x9.png"
    ]
```

## Config Example

Below is a site configuration example in TOML format.

```toml
[params]
[params.seo]
  description = "Satelite Hugo theme demo."
  twitterCard = "summary"
  [params.seo.images]
    ldPaths = [
      "images/image-1x1.png",
      "images/image-4x3.png",
      "images/image-16x9.png"
    ]
    ogPath = "images/image.png"
    ogHeight = "1080"
    ogWidth = "1920"
```

Note that in this example, images are places in a `static/images/` folder.
