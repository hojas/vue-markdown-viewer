import { h, VNode } from 'vue'
import type { Options, AST, Child, Components } from './types'

/**
 * Render normal element
 * @param {AST & {type: 'element'}} ast AST
 * @param {Options} options Options
 * @returns {VNode} VNode
 */
const renderElement = (
  ast: AST & { type: 'element' },
  options: Options
): VNode => {
  return h(
    ast.tagName,
    ast.properties,
    ast.children &&
      ast.children.map((child: Child) => astToVNode(child, options))
  )
}

/**
 * Extends normal element with custom component
 * @param {AST & {type: 'element'}} ast AST
 * @param {Options} options Options
 * @returns {VNode} VNode
 */
const renderCustomComponent = (
  ast: AST & { type: 'element' },
  options: Options & { components: Components }
): VNode => {
  const { components } = options
  const component = components[ast.tagName]
  const isFn = typeof component === 'function'
  const CustomComponent = isFn ? component(ast.properties) : component

  const children = ast.children
    ? ast.children.map((child: Child) => astToVNode(child, options))
    : []

  return h(CustomComponent, ast.properties, isFn ? () => children : children)
}

/**
 * Render link with `target` option
 * @param {AST & {type: 'element'}} ast AST
 * @param {Options} options  Options
 * @returns {VNode} VNode
 */
const renderLink = (
  ast: AST & { type: 'element' },
  options: Options
): VNode => {
  ast.properties = {
    ...ast.properties,
    target: options.linkTarget,
  }
  return renderElement(ast, options)
}

/**
 * Render AST to VNode
 * @param {AST & {type: 'element'}} ast AST
 * @param {Options} options Options
 * @returns {VNode|string} VNode
 */
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
      return renderCustomComponent(
        ast,
        options as Options & { components: Components }
      )
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
