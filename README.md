# vue-markdown-viewer

![npm](https://img.shields.io/npm/v/vue-markdown-viewer)
![npm](https://img.shields.io/npm/dm/vue-markdown-viewer)

Vue component to render markdown with [remark](https://github.com/remarkjs/remark).

## Install

```shell
$ npm install vue-markdown-viewer
```

## Use

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { VueMarkdownRender } from 'vue-markdown-viewer'

const md = ref('## hi')
</script>

<template>
  <VueMarkdownRender>{{ md }}</VueMarkdownRender>
</template>
```

Use a plugin to support gfm:

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { VueMarkdownRender } from 'vue-markdown-viewer'
import remarkGfm from 'remark-gfm'

const md = ref('## hi')
</script>

<template>
  <VueMarkdownRender :remark-plugins="[remarkGfm]">
    {{ md }}
  </VueMarkdownRender>
</template>
```

Use a plugin to support syntax highlight:

````vue
<script lang="ts" setup>
import { ref } from 'vue'
import { VueMarkdownRender } from 'vue-markdown-viewer'
import rehypeHighlight from 'rehype-highlight'

const md = ref(`
## Highlight

```js
console.log("hi")
```
`)
</script>

<template>
  <VueMarkdownRender :rehype-plugins="[rehypeHighlight]">
    {{ md }}
  </VueMarkdownRender>
</template>
````

## Options

- `content`: `string` \
  markdown string
- `components`: `Record<string, Component>` \
  object mapping tag names to Vue components
- `remarkRehypeOptions`: `Record<string, any>` \
  Options of remark-rehype
- `remarkPlugins`: `Array` \
  list of remark plugins to use
- `rehypePlugins`: `Array` \
  list of rehype plugins to use
- `className`: `string` \
  wrap the markdown in a `div` with this class name
- `skipHtml`: `boolean`, default: `false` \
  ignore HTML in markdown completely
- `linkTarget`: `string` \
  target to use on links

## Related

- [react-markdown](https://github.com/remarkjs/react-markdown)
