import { useEffect } from 'react'

export default function Message () {
  useEffect(() => {
    console.log('Message mounted!')

    return () => {
      console.log('Message unmounted!')
    }
  }, [])
  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}
