# Satelite Hugo Theme

Satelite is a Hugo theme for creating beautiful documentation websites.

- Provides quickstart-site archive with ready to build website.
- Thorough documentation and guides for every feature of the theme.
- Responsive design for great user experience everywhere.
- Fuzzy search with no dependency on external services.

## Development Guide

After cloning the project, install the required dependencies:

```s
$ npm ci
```

Quick summary of the development scripts:

- `build` - Build the Hugo theme, demo and documentation sites for production.
  Linting the sources in the process. Built artifacts are placed in the `dist`
  folder.
- `build:theme:debug` - Build the Hugo theme unminified with source maps.
- `dev` - Run the demo site development server.
- `dev:doc` - Run the documentation site development server.
- `lint` - Lint all files with ESLint, Stylelint and Prettier.
- `format` - Format all files with ESLint, Stylelint and Prettier.

The scripts can be invoked using `npm run`:

```s
$ npm run <script>
```

For example, if we want to build the theme we can use the `build` script:

```s
$ npm run build
```
