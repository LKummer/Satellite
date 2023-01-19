+++
title = "Part 2 - Adding Content"
+++

Continuing where we finished part 1, in this part we will create a section and a
page with our own content.

This guide assumes basic familiarity with Hugo terms.
Specifically familiarity [with sections](https://gohugo.io/content-management/sections/),
[front matter](https://gohugo.io/content-management/front-matter/)
and single content pages.

Make sure [to complete part 1 of the tutorial]({{< relref "part-1-getting-started" >}})
before continuing.

## Starting the Development Server

Go to your site's folder and run the following command:

```
hugo server
```

Hugo will start a hot-reload development server.
Leave this server running during the tutorial, when following the next steps you should be able to see the site change in your browser.

Open a browser and go to the URL `hugo server` wrote to the shell.
It is usually `http://localhost:1313`.
You should see your Satellite site.

## Creating a Section

For the purpose of this tutorial, we will create a Tutorial section.

Create a `content/tutorial` folder.
Create a `content/tutorial/_index.md` file.
Paste the following text inside the `_index.md` file:

```toml
+++
title = "Tutorial"
description = "Make your first steps."
+++
```

The `_index.md` file of the section contains section configuration in it's front matter.
Optionally, sections can have `weight`. Lower weighted sections are listed first
in section lists. Unweighted sections are treated as if their `weight` is `0`.

```toml
weight = 100
```

We now have a Tutorial section in our site.
You should be able to see it in the browser.

## Creating a Page

Next we will create a page inside the Tutorial section.

Create a `content/tutorial/part-1-getting-started.md` file.
Paste the following text insie it:

```
+++
title = "Part 1 - Getting Started"
+++

Markdown content of the page.
```

Optionally, pages can have a `description` front matter property.
the `description` is used in social media and search engine meta tags,
and indexed in the internal search.

```toml
description = "Awesome guide to get you started."
```

We now have a page inside our Tutorial section.
You should be able to see it in the browser.

## Final Words

We have achieved the goal of this tutorial.
We have a Satellite site with a section with our own content.

You can now publish your Satellite site with GitHub Pages, GitLab Pages or any other way to host static sites.
