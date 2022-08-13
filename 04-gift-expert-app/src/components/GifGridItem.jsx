import React from 'react'

function GifGridItem ({ title, url }) {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export { GifGridItem }
