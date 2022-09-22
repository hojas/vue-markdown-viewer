# vue-md-render

Vue component to render markdown through [remark](https://github.com/remarkjs/remark).

## Install

```shell
$ npm install vue-md-render
```

## Use

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import VueMdRender from 'vue-md-render'

const md = ref('## hi')
</script>

<template>
  <vue-md-render>
    {{ md }}
  </vue-md-render>
</template>
```

Use a plugin to support gfm:

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import remarkGfm from 'remark-gfm'
import VueMdRender from 'vue-md-render'

const md = ref('## hi')
</script>

<template>
  <vue-md-render :remark-plugins="[remarkGfm]">
    {{ md }}
  </vue-md-render>
</template>
```

Syntax highlight:

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import VueMdRender from 'vue-md-render'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

const md = ref(`
\`\`\`javascript
console.log("hi")
\`\`\`
`)
</script>

<template>
  <vue-md-render>
    {{ md }}
  </vue-md-render>
</template>
```

## Options

- `content`: string \
  markdown string
- `components`: Record<string, Component> \
  object mapping tag names to Vue components
- `remarkRehypeOptions`: Object \
  Options of remark-rehype
- `remarkPlugins`: Array \
  list of remark plugins to use
- `rehypePlugins`: Array \
  list of rehype plugins to use

## Related

- [react-markdown](https://github.com/remarkjs/react-markdown)
