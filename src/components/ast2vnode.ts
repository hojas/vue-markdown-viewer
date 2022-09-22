import { h, VNode } from 'vue'
import type { AST } from './types'

export const astToVNode = (
  ast: AST,
  components?: Record<string, (properties?: Record<string, any>) => VNode>
): VNode | string => {
  if (ast.type === 'root') {
    return h(
      'div',
      ast.children.map((child: any) => astToVNode(child, components))
    )
  } else if (ast.type === 'element') {
    if (ast.children && ast.children.length) {
      if (components && components[ast.tagName]) {
        return h(
          components[ast.tagName](ast.properties),
          ast.properties,
          () =>
            ast.children &&
            ast.children.map((child: any) => astToVNode(child, components))
        )
      }

      return h(
        ast.tagName,
        ast.properties,
        ast.children.map((child: any) => astToVNode(child, components))
      )
    }

    if (components && components[ast.tagName]) {
      return h(components[ast.tagName](ast.properties), ast.properties)
    }

    return h(ast.tagName, ast.properties)
  } else {
    return ast.value
  }
}
