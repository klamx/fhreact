import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export const CounterApp = ({value}) => {
  const [counter, setCounter] = useState(0)
  value = counter
  const handleAdd = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2> {value} </h2>
      <button onClick={handleAdd}>+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}