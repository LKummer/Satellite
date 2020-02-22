# Webpack Based Hugo Theme

## Development Guide

After cloning the project, install the required dependencies:

```
$ npm ci
```

### Development Server

To launch a hot reload dev server with a demo Hugo blog:

```
$ npm run dev
```

### Storybook

To launch a hot reload Storybook instance:

```
$ npm run storybook
```

### Build

To build in development mode:

```
$ npm run build:theme
```

To build in production mode:

```
$ npm run build:theme:prod
```

To build the theme and the demo blog:

```
$ npm run build
```

Built files can be found in the `dist` folder.

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
