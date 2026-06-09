import { describe, expect, it } from 'vitest'
import { transform } from '../src'

describe('transform', () => {
  it('preserves string literal className', () => {
    expect(transform('<div className="3"></div>', 'component.tsx')).toBe('<div className="3"></div>')
  })

  it('transforms single-element array literal', () => {
    expect(transform('<div className={["bg-black"]}></div>', 'component.tsx')).toBe('<div className="bg-black"></div>')
  })

  it('transforms multi-element array literal', () => {
    expect(transform('<div className={["bg-black", "text-white"]}></div>', 'component.tsx')).toBe('<div className="bg-black text-white"></div>')
    expect(transform('<div className={["bg-black", "text-white", "font-semibold"]}></div>', 'component.tsx')).toBe('<div className="bg-black text-white font-semibold"></div>')
  })

  it.fails('folds truthy logical AND expression', () => {
    expect(transform('<div className={["bg-black", true && "text-white"]}></div>', 'component.tsx')).toBe('<div className="bg-black text-white"></div>')
  })

  it.fails('folds falsy logical AND expression', () => {
    expect(transform('<div className={["bg-black", false && "text-white"]}></div>', 'component.tsx')).toBe('<div className="bg-black"></div>')
  })
})
