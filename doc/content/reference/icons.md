+++
title = "Icons and Logos"
+++

Want to make your Satelite website _pop_ with beautiful SVG logos?
This page contains everything you need to know to configure the customizable icons
and logos of your Satelite website.

## Favicon

The favicon can be customized using the `params.icons.favicon` configuration
option. However, you also need to host your favicon.

Place the favicon in the `static/` folder of the website.
It is recommended to use a subfolder, such as `static/images/`.
With your icon in the static folder, set `params.icons.favicon` to the relative
path of your favicon.

For example, Using `static/images/favicon.svg`:

```toml
[params]
[params.icons]
  favicon = "images/favicon.svg"
```

## Navigation Bar Logo

The navigation bar logo can be customized using the `params.icons.navbarIcon`
configuration option.
Note the navigation bar logo is completely optional and Satelite is designed to
look great even without it.

`params.icons.navbarIcon` should contain an SVG logo with the `navbar-logo-icon`
class applied.

To create hover animations, use the `--logo-hover` custom property.
Normally set to `0`, when users hover over the navigation bar logo (and text) it is set to `1`.

Check out the demo site configuration for an example.
