// Node properties of AST
export type Properties = Record<string, any>

// Normal element node of AST
interface Element {
  type: 'element'
  tagName: string
  properties?: Properties
  children?: Child[]
}

// Text node of AST
interface Text {
  type: 'text'
  value: string
}

// Raw html node of AST
interface RawHtml {
  type: 'raw'
  value: string
  properties?: Properties
  children?: Child[]
}

// Root node of AST
interface Root {
  type: 'root'
  children: Child[]
}

// Child of AST
export type Child = Element | Text | RawHtml

// AST
export type AST = Root | Child

// Custom component
type Component = (properties?: Record<string, any>, children?: any) => any
export type Components = Record<string, Component | string>

// Component options
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
