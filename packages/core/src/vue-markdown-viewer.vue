<script lang="ts" setup>
import { ref, useSlots, watchEffect } from 'vue'
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

const slots = useSlots()

// Get content from props or default slot
const content = ref('')

watchEffect(() => {
  if (props.content === undefined) {
    const slot = slots.default
    content.value = slot ? (slot()[0].children as string) : ''
  } else {
    content.value = props.content
  }
})

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

  const mdastTree = processor.parse(content.value)

  return processor.runSync(mdastTree, content.value) as AST
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
