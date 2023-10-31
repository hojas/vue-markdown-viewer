# vue-md-render

![npm](https://img.shields.io/npm/v/vue-md-render) ![npm](https://img.shields.io/npm/dw/vue-md-render)

Vue component to render markdown with [remark](https://github.com/remarkjs/remark).

## Install

```shell
$ npm install vue-md-render
```

## Use

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { VueMdRender } from 'vue-md-render'

const md = ref('## hi')
</script>

<template>
  <VueMdRender>{{ md }}</VueMdRender>
</template>
```

Use a plugin to support gfm:

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { VueMdRender } from 'vue-md-render'
import remarkGfm from 'remark-gfm'

const md = ref('## hi')
</script>

<template>
  <VueMdRender :remark-plugins="[remarkGfm]">
    {{ md }}
  </VueMdRender>
</template>
```

Use a plugin to support syntax highlight:

````vue
<script lang="ts" setup>
import { ref } from 'vue'
import { VueMdRender } from 'vue-md-render'
import rehypeHighlight from 'rehype-highlight'

const md = ref(`
## Highlight

\`\`\`js
console.log("hi")
\`\`\`
`)
</script>

<template>
  <VueMdRender :rehype-plugins="[rehypeHighlight]">
    {{ md }}
  </VueMdRender>
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
