# iTheme theme for Hugo

## Introduction

An Apple style theme for [Hugo](https://gohugo.io/), inspired by [astro-air-blog](https://github.com/austin2035/astro-air-blog)

## Preview

[Demo Site](https://hugo-theme-itheme.netlify.app)

## Screenshot

![screenshot](https://github.com/floyd-li/hugo-theme-itheme/blob/master/images/screenshot.png)

## Features

- `Light` and `Dark` mode for post
- Three different sizes for images in the post

## Usage

Please flow the [official quickstart](https://gohugo.io/getting-started/quick-start/), it's really easy and simple.

```bash
git submodule add https://github.com/floyd-li/hugo-theme-itheme.git themes/hugo-theme-itheme
echo "theme = 'hugo-theme-itheme'" >> config.toml
```

Then you need to add some configuration to `config.toml`, please flow the [Site Configuration](#site-configuration).

## Configuration

### Site Configuration

```toml
[params]
  defaultCover = 'https://example.com/cover.jpg' // default cover image for post not setting cover
  email = 'floyd.li@outlook.com' // the email address display in the footer
  [[params.socialMedia]] // custom social links display in the footer, you can add one or more
    name = 'Github'
    url = 'https://github.com/floyd-li'
  [[params.socialMedia]]
    name = 'Twitter'
    url = 'https://twitter.com/some-one'
  [[params.blogroll]] // blogroll links display in the footer, you can add one or more
    name = 'Apple'
    url = 'https://Apple.com/'
  [[params.blogroll]]
    name = 'Google'
    url = 'https://Google.com/'
```

### Post Configuration

```markdown
---
title: 'Some Article'
date: '2022-10-27T13:06:38+08:00'
draft: true
description: 'some description of the article'
author: 'author of this article'
cover: 'https://example.com/cover.jpg' // if not set cover, it will use the 'defaultCover' in site configuration
tags: ["tag1", "tag2", "tag3"]
theme: "dark" // you can set 'light' or 'dark' here
---
```

### Three display modes of images

The three display modes of images are: `wide`, `big`, `inline`.
When you edit your markdown file, you can add `wide` or `big` or `inline` to the image alt, like this:

```markdown
![alt content|wide](a.png)
```

The Separator is `|`, and the default mode is `big`.
