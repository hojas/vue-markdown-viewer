# vue-markdown-renderer

Vue component to render markdown through remark.

## Install

```shell
$ npm install vue-markdown-renderer
```

## Use

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import VueMarkdownRenderer from 'vue-markdown-renderer'

const md = ref('## hi')
</script>

<template>
  <vue-markdown-renderer>
    {{ md }}
  </vue-markdown-renderer>
</template>
```

Use a plugin to support gfm:

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import remarkGfm from 'remark-gfm'
import VueMarkdownRenderer from 'vue-markdown-renderer'

const md = ref('## hi')
</script>

<template>
  <vue-markdown-renderer :remark-plugins="[remarkGfm]">
    {{ md }}
  </vue-markdown-renderer>
</template>
```

Syntax highlight:

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import remarkGfm from 'remark-gfm'
import VueMarkdownRenderer from 'vue-markdown-renderer'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

const md = ref(`
\`\`\`javascript
console.log("hi")
\`\`\`
`)
</script>

<template>
  <vue-markdown-renderer :remark-plugins="[remarkGfm]">
    {{ md }}
  </vue-markdown-renderer>
</template>
```

## Related

- [react-markdown](https://github.com/remarkjs/react-markdown)
