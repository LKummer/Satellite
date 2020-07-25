# Hugo Theme

> Webpack boilerplate for Hugo theme development

## Development Guide

After cloning the project, install the required dependencies:

```s
$ yarn install
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

The scripts can be invoked using `yarn run`:

```s
$ yarn run <script>
```

For example, if we want to build the theme we can use the `build` script:

```s
$ yarn run build
```

## Translation Guide

The translation files are in the `i18n` folder. Translation files should be
named in the form `<language subtag>.toml`, for example: `fr.toml`.

A translation definition takes the following form:

```toml
[definition]
    form = "template string"
```

Where `definition` is the key of the definition, `form` is the
[Go Plural Form](https://godoc.org/golang.org/x/text/feature/plural#Form)
of the argument passed to the `template string` and `template string` is the
translated string.

The `direction` definition is a special definition used to configure whether
the language requires left-to-right or right-to-left styling by being set to
`ltr` or `rtl` respectively.

```toml
# Example direction definition:
[direction]
    other: "ltr"
```

If the `direction` definition is not set to either `ltr` or `rtl`, Hugo will
emit an error and refuse to build.
