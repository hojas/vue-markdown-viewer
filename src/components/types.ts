import type { VNode } from 'vue'

interface Text {
  type: 'text'
  value: string
}

interface Element {
  type: 'element'
  tagName: string
  properties?: Record<string, any>
  children?: Array<Element | Text>
}

interface Root {
  type: 'root'
  children: Array<Element | Text>
}

export type AST = Root | Element | Text

export type Components = Record<
  string,
  (properties?: Record<string, any>) => VNode
>

export interface Props {
  content?: string
  components?: Components
  remarkRehypeOptions?: Record<string, any>
  remarkPlugins?: any[]
  rehypePlugins?: any[]
}
