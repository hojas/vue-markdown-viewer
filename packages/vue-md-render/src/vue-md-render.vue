<script lang="ts" setup>
import { useSlots } from 'vue'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { astToVNode } from './ast-to-vnode'
import type { AST, Components } from './types'

// Component props/options
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
const slots = useSlots()
if (typeof content === 'undefined') {
  const slot = slots.default
  content = slot ? (slot()[0].children as string) : ''
}

/**
 * Parse markdown to AST with plugins
 * @returns {AST} AST
 */
function main(): AST {
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
  <RenderMarkdown />
</template>
