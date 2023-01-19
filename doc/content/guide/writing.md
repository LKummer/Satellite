+++
title = "Writing and Organizing Content"
+++

Just got Satellite installed and configured? You are probably looking to add
sections and content to your website.

In this guide we will create an example section, content page, and configure
both to take advantage of Satellite's features.

This guide assumes basic knowledge about Hugo.
Specifically [knowledge about sections](https://gohugo.io/content-management/sections/),
[front matter](https://gohugo.io/content-management/front-matter/)
and single content pages.

## Creating Sections

Suppose we want a `guides` section.
First, create a `guides` folder inside the site's `content` folder.
The name of the section's folder will be used in the path of single pages inside
that section.

Create a `_index.md` inside the `guides` folder created. The `_index.md` file will
contain the configuration of the section.

Every section should have a `title` and a `description`.
`title` will be used as the title of the section.
`description` will be used in the index page to describe the section.

```toml
title = "Guides"
description = "Great way to get up and running."
```

Optionally, sections can have `weight`. Lower weighted sections are listed first
in section lists. Unweighted sections are treated as if their `weight` is `0`.

```toml
weight = 100
```

Putting everything together, our section's `_index.md` file should look somewhat
like this:

```md
+++
title = "Guides"
description = "Great way to get up and running."
weight = 100
+++
```

## Creating Content Pages

Let us create a quick start guide inside the `guides` section we just created.

Inside the `guides` section folder, create a `quickstart.md` file.
The name of the file will be used for the final path of the page.

Every content page should have a `title`.

```toml
title = "Quick Start Guide"
```

Optionally, pages can have a `description`.
`description` will be used in social media and search engine meta tags,
and indexed in the internal search.

```toml
description = "Awesome guide to get you started."
```

Putting everything together, our content page should look somewhat like this:

```md
+++
title = "Quick Start Guide"
description = "Awesome guide to get you started."
+++

Markdown content of the page.
```
