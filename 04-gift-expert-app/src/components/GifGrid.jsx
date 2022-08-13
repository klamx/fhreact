// import { useEffect, useState } from 'react'
// import getGifts from '../../helpers/getGifs'
import UseFetchGifts from '../hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem'

function GifGrid ({ category }) {
  const { images, isLoading } = UseFetchGifts(category)

  return (
    <div>
      <h3>{category}</h3>
      {isLoading && <h2>cargando...</h2>}
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

export { GifGrid }
