export type Properties = Record<string, any>

interface Element {
  type: 'element'
  tagName: string
  properties?: Properties
  children?: Children
}

interface Text {
  type: 'text'
  value: string
}

interface RawHtml {
  type: 'raw'
  value: string
  properties?: Properties
  children?: Children
}

interface Root {
  type: 'root'
  children: Children
}

export type Child = Element | Text | RawHtml

export type Children = Array<Child>

export type AST = Root | Child

export type Components = Record<
  string,
  (properties?: Record<string, any>) => any
>

export interface Options {
  content?: string
  components?: Components
  remarkRehypeOptions?: Record<string, any>
  remarkPlugins?: any[]
  rehypePlugins?: any[]
  className?: string
  skipHtml?: boolean
  linkTarget?: string
}
