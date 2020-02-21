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
$ npm run build:webpack
```

To build in production mode:

```
$ npm run build:webpack:prod
```

After building the the theme folder can be found in the `dist` folder.
