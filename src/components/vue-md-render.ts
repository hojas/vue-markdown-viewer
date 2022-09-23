import { PropType, getCurrentInstance } from 'vue'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { astToVNode } from './ast-to-vnode'
import type { Components, Options, AST } from './types'

export default {
  props: {
    content: {
      type: String,
    },
    components: {
      type: Object as PropType<Components>,
    },
    remarkRehypeOptions: {
      type: Object as PropType<Record<string, any>>,
    },
    remarkPlugins: {
      type: Array,
    },
    rehypePlugins: {
      type: Array,
    },
    skipHtml: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: Options) {
    let { content } = props
    if (typeof content === 'undefined') {
      const instance = getCurrentInstance()
      const slot = instance?.slots.default
      content = slot ? (slot()[0].children as string) : ''
    }

    const main = (): AST => {
      const processor = unified()
        .use(remarkParse)
        .use(props.remarkPlugins || [])
        .use(remarkRehype, {
          ...props.remarkRehypeOptions,
          allowDangerousHtml: true,
        })
        .use(props.rehypePlugins || [])

      return processor.runSync(
        processor.parse(content),
        content
      ) as unknown as AST
    }

    return () => astToVNode(main(), props)
  },
}
