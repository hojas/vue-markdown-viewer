import { h, VNode } from 'vue'
import type { Options, AST, Child, Components } from './types'

const renderElement = (ast: AST & { type: 'element' }, options: Options) =>
  h(
    ast.tagName,
    ast.properties,
    ast.children
      ? ast.children.map((child: Child) => astToVNode(child, options))
      : []
  )

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

const renderLink = (ast: AST & { type: 'element' }, options: Options) => {
  ast.properties = {
    ...ast.properties,
    target: options.linkTarget,
  }
  return renderElement(ast, options)
}

export const astToVNode = (ast: AST, options: Options): VNode | string => {
  // root node
  if (ast.type === 'root') {
    const { className } = options
    const properties = className ? { className } : {}
    return h(
      'div',
      properties,
      ast.children.map((child: any) => astToVNode(child, options))
    )
  }

  // element
  if (ast.type === 'element') {
    // custom
    if (options.components && options.components[ast.tagName]) {
      return renderCustomComponent(ast, options)
    }

    // link
    if (ast.tagName === 'a') {
      return renderLink(ast, options)
    }

    // others element
    return renderElement(ast, options)
  }

  // raw html
  if (ast.type === 'raw') {
    return options.skipHtml ? '' : ast.value
  }

  // text node
  return ast.value
}
