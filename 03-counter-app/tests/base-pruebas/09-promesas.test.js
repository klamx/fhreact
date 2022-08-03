import { expect, describe, test } from 'vitest'
import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'
import heroes from '../../src/data/heroes'

// vitest tiene deprecado el done()

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', () => {
    const id = 1
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toEqual(heroes.filter(her => her.id === id))
      })
  })

  test('getHeroeByIdAsync debe retornar un error si el hero no existe', () => {
    const id = 100
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual(heroes.filter(her => her.id === id))
      })
      .catch((error) => {
        expect(error).toBe('No se pudo encontrar el héroe')
      })
  })
})
