import { h, VNode } from 'vue'
import type { Options, AST, Child, Components } from './types'

const renderCustomComponent = (
  ast: AST & { type: 'element' },
  options: Options
) => {
  const components = options.components as Components
  const CustomComponent = components[ast.tagName](ast.properties)

  return h(CustomComponent, ast.properties, () =>
    ast.children
      ? ast.children.map((child: Child) => astToVNode(child, options))
      : []
  )
}

export const astToVNode = (ast: AST, options: Options): VNode | string => {
  if (ast.type === 'root') {
    // root node
    return h(
      'div',
      ast.children.map((child: any) => astToVNode(child, options))
    )
  } else if (ast.type === 'element') {
    // custom
    if (options.components && options.components[ast.tagName]) {
      return renderCustomComponent(ast, options)
    }

    // element
    return h(
      ast.tagName,
      ast.properties,
      ast.children
        ? ast.children.map((child) => astToVNode(child, options))
        : []
    )
  } else if (ast.type === 'raw') {
    // raw html
    return options.skipHtml ? '' : ast.value
  } else {
    // text node
    return ast.value
  }
}
