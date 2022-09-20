import type { VNode } from 'vue'

declare interface Text {
  type: 'text'
  value: string
}

declare interface Element {
  type: 'element'
  tagName: string
  properties?: Record<string, any>
  children?: Array<Element | Text>
}

declare interface Root {
  type: 'root'
  children: Array<Element | Text>
}

declare type AST = Root | Element | Text

declare type Components = Record<
  string,
  (properties?: Record<string, any>) => VNode
>

declare interface Props {
  content?: string
  components?: Components
  remarkRehypeOptions?: Record<string, any>
  remarkPlugins?: any[]
  rehypePlugins?: any[]
}
