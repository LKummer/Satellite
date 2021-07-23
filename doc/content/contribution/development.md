+++
title = "Development Workflow"
keywords = ["Build"]
+++

Familiarize yourself with the development workflow of the project.

This guide assumes you are somewhat familiar with Hugo theme development.
If not, [check out the Hugo documentation](https://gohugo.io/documentation/).

## Basic Workflow

Describes the basic workflow of Satelite development.

### Installation

After cloning the Satelite repository, install the required dependencies:

```s
$ npm ci
```

### Development Server

When making changes, a development server with the demo site should be used.
To run demo site development server:

```s
$ npm run dev
```

To documentation site development server:

```s
$ npm run dev:doc
```

### Formatting and Linting

Before committing changes, make sure your code is formatted and passes all linters.

```s
$ npm run format
$ npm run lint
```

## Development Scripts

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
