import { describe, expect, test } from 'vitest'
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
  test('getUser debe reteronar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser()
    expect(user).toMatchObject(testUser)
  })

  test('getUsuarioActivo debe reternar un objeto', () => {
    const nombre = 'Alejandro'
    const testUser = {
      uid: 'ABC567',
      username: nombre
    }

    const user = getUsuarioActivo(nombre)
    expect(user).toStrictEqual(testUser)
  })
})
