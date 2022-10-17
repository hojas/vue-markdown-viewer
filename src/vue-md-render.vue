<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { astToVNode } from './ast-to-vnode'
import type { Components, AST } from './types'

/**
 * Component props/options
 */
const props = defineProps<{
  content?: string
  components?: Components
  remarkRehypeOptions?: Record<string, any>
  remarkPlugins?: any[]
  rehypePlugins?: any[]
  className?: string
  skipHtml?: boolean
  linkTarget?: string
}>()

// Get content from props or default slot
let { content } = props
if (typeof content === 'undefined') {
  const instance = getCurrentInstance()
  const slot = instance?.slots.default
  content = slot ? (slot()[0].children as string) : ''
}

/**
 * Parse markdown to AST with plugins
 * @returns {AST} AST
 */
const main = (): AST => {
  const processor = unified()
    .use(remarkParse)
    .use(props.remarkPlugins || [])
    .use(remarkRehype, {
      ...props.remarkRehypeOptions,
      allowDangerousHtml: true,
    })
    .use(props.rehypePlugins || [])

  return processor.runSync(processor.parse(content), content) as unknown as AST
}

/**
 * Component to render markdown
 * @returns VNode
 */
const RenderMarkdown = () => astToVNode(main(), props)
</script>

<template>
  <render-markdown />
</template>
