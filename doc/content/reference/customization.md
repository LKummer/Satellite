+++
title = "Color Customization"
keywords = ["Personalization", "Theme"]
+++

Looking to make your Satellite website _yours_?
You arrived at the right place.
This page lists all color customization options Satellite offers.

Each section of a Satellite site can be colored independently, allowing you to
theme your website however you want.

Colors can be customized using `params.colors` configuration options.
This page lists all color options.
Check out the config example at the bottom for a concrete example.

## Primary Colors

Used for the main section of the website, where content is displayed.

| Option       | Description                              |
| ------------ | ---------------------------------------- |
| `primary-b1` | Main background.                         |
| `primary-b2` | Light card background.                   |
| `primary-b3` | Dark card background.                    |
| `primary-b4` | Table background.                        |
| `primary-b5` | Table alternate background.              |
| `primary-a1` | Card border.                             |
| `primary-a2` | Content link.                            |
| `primary-a3` | Content link hover.                      |
| `primary-a4` | Content link active.                     |
| `primary-f4` | List markers and table of contents text. |
| `primary-f5` | Content text color.                      |
| `primary-f6` | Page link hover.                         |
| `primary-f7` | Page link active.                        |

## Secondary Colors

Used for top navigation bar.

| Option         | Description               |
| -------------- | ------------------------- |
| `secondary-b2` | Navbar search background. |
| `secondary-b3` | Navbar background.        |
| `secondary-b4` | Navbar hover background.  |
| `secondary-b5` | Navbar active background. |
| `secondary-a1` | Navbar search border.     |
| `secondary-f1` | Navbar text.              |
| `secondary-f9` | Navbar search text.       |

## Tertiary Colors

Used for side navigation menu and mobile hamburger navigation menu.

| Option        | Description                  |
| ------------- | ---------------------------- |
| `tertiary-b5` | Side menu background.        |
| `tertiary-b6` | Side menu hover background.  |
| `tertiary-b7` | Side menu active background. |
| `tertiary-a3` | Side menu indicator.         |
| `tertiary-f3` | Side menu text.              |
| `tertiary-f4` | Side menu text hover.        |
| `tertiary-f5` | Side menu text active.       |
| `tertiary-f6` | Side menu active title.      |

## Syntax Highlight Colors

Used for code block syntax highlight.

| Option              | Description                  |
| ------------------- | ---------------------------- |
| `syntax-background` | Syntax highlight background. |
| `syntax-foreground` | Syntax highlight text.       |
| `syntax-comment`    | Commend text highlight.      |
| `syntax-special`    | Special text highlight.      |
| `syntax-operator`   | Operator text highlight.     |
| `syntax-lliteral`    | lliteral text highlight.      |

## Config Example

Below is a configuration example in TOML format.

```toml
[params]
[params.colors]
  primary-b1 = "hsl(355, 10%, 98%)"
  primary-b2 = "hsl(355, 15%, 97%)"
  primary-b3 = "hsl(355, 25%, 95%)"
  primary-b4 = "hsl(355, 7.5%, 96%)"
  primary-b5 = "hsl(355, 5%, 94%)"
  primary-a1 = "hsl(355, 20%, 90%)"
  primary-f4 = "hsl(355, 20%, 45%)"
  primary-f5 = "hsl(355, 5%, 40%)"
  primary-f6 = "hsl(355, 25%, 30%)"
  primary-f7 = "hsl(355, 35%, 25%)"
  secondary-b3 = "hsl(355, 95%, 30%)"
  secondary-b4 = "hsl(350, 95%, 28%)"
  secondary-b5 = """
  linear-gradient(
    30deg,
    hsl(0, 80%, 20%),
    hsl(350, 90%, 25%))"""
  secondary-f1 = "hsl(350, 15%, 80%)"
  tertiary-b5 = "hsl(350, 25%, 95%)"
  tertiary-b6 = "hsl(350, 30%, 90%)"
  tertiary-b7 = "hsl(350, 35%, 88%)"
  tertiary-a3 = "hsl(350, 35%, 70%)"
  tertiary-f3 = "hsl(350, 20%, 45%)"
  tertiary-f4 = "hsl(350, 30%, 35%)"
  tertiary-f5 = "hsl(350, 50%, 40%)"
  tertiary-f6 = "hsl(350, 35%, 40%)"
  syntax-background = "hsl(250, 15%, 97%)"
  syntax-foreground = "hsl(250, 35%, 40%)"
  syntax-comment = "hsl(250, 5%, 50%)"
  syntax-special = "hsl(360, 75%, 60%)"
  syntax-operator = "hsl(360, 75%, 60%)"
  syntax-lliteral = "hsl(360, 75%, 60%)"
```

Note that while the example uses `hsl` colors, any CSS color format can be used.
