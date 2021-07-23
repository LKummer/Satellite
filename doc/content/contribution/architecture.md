+++
title = "Theme Architecture"
keywords = ["Structure", "Folder", "Directory"]
+++

Satelite is built using a custom Webpack setup which processes `SCSS` files
and copies files to different folders in order to use Sass without requiring
extended Hugo and reduce folder nesting.
The [Webpack Hugo theme boilerplate is available on Github](https://github.com/LKummer/hugo-theme-boilerplate).

## Folder Structure

The project has a somewhat unique folder structure for a Hugo theme as it uses
Webpack to build the theme itself.

- `layouts/` is copied to the theme's layouts folder.
- `public/` is copied to the theme's root folder.
- `src/` contains `.js` and `.scss` source files, including the Webpack entry point `src/index.js`.
- `demo/` contains the demo website.
- `doc/` contains the documentation website.

## Style Architecture

The stylesheets are following [the SMACSS architecture](http://smacss.com/),
and make ample use of Sass' `&` operator to create nicely organized stylesheets.

The stylesheets reside in the `src/style/` folder, the usual SMACSS folders can
be found inside.

Pretty much everything is parameterized with CSS custom properties. Custom property
definitions can be found in `src/style/theme/`

Each part of the theme uses a separate color _family_ to for better color
customization by end users. For example, the top navigation bar uses _secondary_
colors.
