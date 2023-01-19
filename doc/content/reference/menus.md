+++
title = "Menus and Navigation"
+++

This document assumes basic knowledge of [Hugo menus](https://gohugo.io/content-management/menus/).

## Top Navigation

The `params.logoPermalink` option can be used to set where the top navigation
logo links to. By default the logo links to the site's index.

The `main` menu entries are listed in the top navigation bar and in the mobile
hamburger menu. Note that `weight` can be set to order menu items.

Pages on the website can be added to the `main` menu through front matter options,
for example:

```toml
[menu.main]
  weight = -10
```

External pages can be added through the site configuration, for example:

```toml
[menu]
[[menu.main]]
  name = "Github"
  url = "https://github.com/LKummer/Satellite-Hugo-Theme"
```

## Section Navigation

All sections are listed in the index page, side navigation menu and mobile
hamburger menu. `weight` front matter option can be set to order sections.
Lower weighted sections are listed first, unweighted sections are treated as if
they are weighted `0`.
