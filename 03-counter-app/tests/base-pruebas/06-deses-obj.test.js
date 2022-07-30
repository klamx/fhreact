import { describe, expect, test } from 'vitest'
import { usContext } from '../../src/base-pruebas/06-deses-obj'

describe('test en 06-deses-obj', () => {
  test('debe retornar un objeto', () => {
    const clave = 123
    const edad = 12
    const testObj = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    }

    const obj = usContext({ clave, edad })
    expect(obj).toMatchObject(testObj)
  })
})
