import { useState } from 'react'
import AddCategory from './components/AddCategory'

function GifExpertApp () {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (newCategory) => {
    setCategories([...categories, newCategory])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
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
