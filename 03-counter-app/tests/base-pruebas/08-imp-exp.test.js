import { describe, test, expect } from 'vitest'
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'

describe('Pruebas in 08-imp-exp', () => {
  test('getHeroeById debe de retornar un heroe por ID', () => {
    const id = 1
    const hero = getHeroeById(id)

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById debe de retornar un heroe por ID', () => {
    const id = 100
    const hero = getHeroeById(id)

    expect(hero).toBeFalsy()
  })

  test('getHeroesByOwner debe retornar 3 heroes de dc', () => {
    // const testHeroes = [
    //   { id: 1, name: 'Batman', owner: 'DC' },
    //   { id: 3, name: 'Superman', owner: 'DC' },
    //   { id: 4, name: 'Flash', owner: 'DC' }
    // ]

    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)

    expect(heroes.length).toBe(3)
  })

  test('getHeroesByOwner debe retornar un objeto con heroes de DC', () => {
    const testHeroes = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]

    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)

    expect(heroes).toEqual(testHeroes)
  })

  test('getHeroesByOwner debe retornar 2 heroes de marvel', () => {
    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner)

    expect(heroes.length).toBe(2)
  })
})
