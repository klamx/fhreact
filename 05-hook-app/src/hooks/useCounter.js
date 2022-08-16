import { useState } from 'react'

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const changeValue = (value = 1) => {
    if (counter === 0 && value < 0) return
    setCounter(counter + value)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return { counter, changeValue, reset }
}
