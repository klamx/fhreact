import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)
  // const handleAdd = () => {
  //   setCounter(prevCounter => prevCounter + 1)
  // }

  const handleChange = (change) => {
    if (change === 0) return setCounter(0)
    return setCounter((prevCounter) => prevCounter + change)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>
      <button onClick={() => handleChange(-1)}>-1</button>
      <button onClick={() => handleChange(+1)}>+1</button>
      <button onClick={() => handleChange(0)}>reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
