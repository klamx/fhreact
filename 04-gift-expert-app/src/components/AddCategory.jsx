import { useState } from 'react'

function AddCategory ({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim())
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

export { AddCategory }
