<p align="center">
  <a href="https://lkummer.github.io/Satellite/">
    <img width="55%" src="https://lkummer.github.io/Satellite/images/readme-logo.svg">
  </a>
</p>
<p align="center">
  <a href="https://github.com/LKummer/Satellite/releases">
    <img src="https://img.shields.io/github/v/tag/LKummer/Satellite?style=flat-square">
  </a>
  <a href="https://github.com/LKummer/Satellite/actions/workflows/integration.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/LKummer/Satellite/integration.yml?label=integration&style=flat-square">
  </a>
  <a href="https://github.com/LKummer/Satellite/actions/workflows/delivery.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/LKummer/Satellite/delivery.yml?label=delivery&style=flat-square">
  </a>
  <a href="https://github.com/LKummer/Satellite/blob/master/LICENSE.md">
    <img src="https://img.shields.io/github/license/LKummer/Satellite?style=flat-square">
  </a>
</p>

<p align="center">
  Satellite is a Hugo theme for creating beautiful documentation websites.
  <a href="https://lkummer.github.io/Satellite/">
    Check out the documentation.
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contribution">Contribution</a>
</p>

<p>
  <a href="https://lkummer.github.io/Satellite/">
    <img src="https://lkummer.github.io/Satellite/images/readme-banner.svg" align="center">
  </a>
</p>

## Key Features

- **Quickstart site** archive with ready to build website.
- **Thorough documentation and guides** for every feature of the theme.
- **Color customization** to make it yours.
- **Automatic dark mode** and manual toggle.
- **Fuzzy full-text search** with no dependency on external services.
- **Multi-version builds** to document your project over time.
- **Responsive design** for great user experience everywhere.
- **Search and sharing optimization** for Google, Facebook and Twitter.

<p>
  <a href="https://lkummer.github.io/Satellite/">
    <img src="https://lkummer.github.io/Satellite/images/readme-theme.svg" align="center">
  </a>
</p>

## Getting Started

Make sure to have Hugo `v0.109.0` or later installed for best compatibility.

Download the latest `quickstart-site` archive [from the releases](https://github.com/LKummer/Satellite/releases).
Once extracted, you should have a ready to build website.
Run `hugo` to build the site, or `hugo server` to start a hot reload server.

[Check out the detailed tutorial](https://lkummer.github.io/Satellite/tutorial/part-1-getting-started/) for more information.

## Contribution

Please only contribute pull requests for open issues.
If an issue does not already exist, please open an issue.

It would be appreciated if you post a comment on an issue before submitting or working on a pull request for it.

Make sure to run `npm run format` and `npm run lint` before submitting commits to avoid failing CI pipelines.

### Development Workflow

**Note** these instructions are for development of Satellite itself.
For development of sites using the theme, [check out the documentation](https://lkummer.github.io/Satellite).

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

For more information [check out the detailed guide](https://lkummer.github.io/Satellite/contribution/development/).
