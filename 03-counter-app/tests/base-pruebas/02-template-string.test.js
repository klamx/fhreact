
import { describe, expect, test } from 'vitest'
import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('pruebas en 02-template-string', () => {
  test('debe devolver Hola Fernando', () => {
    const name = 'Fernando'
    expect(getSaludo(name)).toBe(`Hola ${name}`)
  })

  // test
})
