import { useEffect } from 'react'
import getGifts from '../../helpers/getGifs'

function GifGrid ({ category }) {
  useEffect(() => {
    getGifts(category)
  }, [])

  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}

export default GifGrid
