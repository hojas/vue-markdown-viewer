# A demo of `vue-markdown`

`vue-markdown` is a markdown component for Vue.

## Overview

- Follows [CommonMark](https://commonmark.org)
- Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
- Lets you define your own components (to render `MyHeading` instead of `h1`)
- Has a lot of plugins

## Custom video

```video
http://techslides.com/demos/sample-videos/small.mp4
http://techslides.com/demos/sample-videos/small.webm
```

## Table of contents

Here is an example of a plugin in action
([`remark-toc`](https://github.com/remarkjs/remark-toc)).
This section is replaced by an actual table of contents.

## Syntax highlighting

```js
function main() {
  console.log('Hello World')
}
```

## GitHub flavored markdown (GFM)

For GFM, you can _also_ use a plugin:
[`remark-gfm`](https://github.com/remarkjs/remark-gfm).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **do not work by default**.
👆 Use the toggle above to add the plugin.

|    Feature | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
|        GFM | 100% w/ `remark-gfm` |

~~strikethrough~~

- [ ] task list
- [x] checked item

https://example.com

## HTML in markdown

⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use [`rehype-raw`](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
[`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize).

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>
