import MagicString from 'magic-string'
import { parseAndWalk } from 'oxc-walker'

export function transform(code: string, id: string): string {
  const s = new MagicString(code)

  parseAndWalk(code, id, node => {
    if (node.type === 'JSXAttribute' && node.name.name === 'className') {
      if (node.value?.type !== 'JSXExpressionContainer') return

      const { expression, start, end } = node.value

      if (expression.type === 'ArrayExpression') {
        const result = expression.elements
          .map(element => {
            if (element?.type === 'Literal') return element.value
          })
          .join(' ')

        s.overwrite(start, end, `"${result}"`)
      }
    }
  })
  return s.toString()
}
