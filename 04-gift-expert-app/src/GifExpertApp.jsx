import { useState } from 'react'
import AddCategory from './components/AddCategory'

function GifExpertApp () {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = () => {
    setCategories([...categories, 'Valorant'])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map(cat => {
          return (
            <li key={cat}>{cat}</li>
          )
        })}
      </ol>
    </>
  )
}

export default GifExpertApp
