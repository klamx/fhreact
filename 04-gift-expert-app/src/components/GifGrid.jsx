// import { useEffect, useState } from 'react'
// import getGifts from '../../helpers/getGifs'
import UseFetchGifts from '../hooks/useFetchGifts'
import GifGridItem from './GifGridItem'

function GifGrid ({ category }) {
  // useEffect(() => {
  //   getGifts(category)
  //     .then(newImages => setImages(newImages))
  // }, [])

  // const [images, setImages] = useState([])

  const { images, isLoading } = UseFetchGifts(category)

  return (
    <div>
      <h3>{category}</h3>
      <div className='card-grid'>
        {
          images.map((image) => {
            return (
              <GifGridItem key={image.id} {...image} />
            )
          })
        }
      </div>
    </div>
  )
}

export default GifGrid
