+++
title = "Getting Started"
keywords = ["Quick", "Install", "Build", "Deploy"]
+++

The quickest way to get up and running with Satellite is using the provided
quickstart-site archive.

This guide assumes basic knowledge of Hugo website structure, and Hugo's CLI.
Specifically, [`hugo` for building sites](https://gohugo.io/commands/hugo/)
and [`hugo server` hot reload server](https://gohugo.io/commands/hugo_server/).

For best compatibility, use Hugo `v0.81.0`. Newer versions should work fine.

## Download and Installation

Head over [to Satellite's releases on Github](https://github.com/LKummer/Satellite/releases)
and download the latest quickstart-site archive.
Extract the quickstart-site archive to an empty folder.
The site should be ready to build.

## Development Server

To run a hot-reload development server, run Hugo `server` inside the folder
containing the site:

```s
$ hugo server
```

## Production Build

To build the site, run Hugo inside the folder containing the site:

```s
$ hugo
```

## Further Configuration

Your site should be ready for you [to start writing content]({{< relref "writing" >}}).
For futher configuration, check out [menu and navigation customization]({{< ref "/reference/menus" >}}),
[color customization]({{< ref "/reference/customization" >}}) and other documentation pages.
