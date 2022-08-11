import { useEffect, useState } from 'react'
import getGifts from '../../helpers/getGifs'

function UseFetchGifts (category) {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifts(category)
      .then(newImages => setImages(newImages))
  }, [])

  return { images, isLoading: true }
}

export default UseFetchGifts
