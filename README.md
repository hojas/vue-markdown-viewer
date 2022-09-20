# vue-md-render

Vue component to render markdown through remark.

## Install

```shell
$ npm install vue-md-render
```

## Use

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import VueMarkdownRenderer from 'vue-md-render'

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
import VueMarkdownRenderer from 'vue-md-render'

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
import remarkGfm from 'remark-gfm'
import VueMarkdownRenderer from 'vue-md-render'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

const md = ref(`
\`\`\`javascript
console.log("hi")
\`\`\`
`)
</script>

<template>
  <vue-md-render :remark-plugins="[remarkGfm]">
    {{ md }}
  </vue-md-render>
</template>
```

## Related

- [react-markdown](https://github.com/remarkjs/react-markdown)
