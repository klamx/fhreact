import { useState } from 'react'

function AddCategory ({ setCategories }) {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return
    setCategories(prevCat => [...prevCat, inputValue])
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}

export default AddCategory
