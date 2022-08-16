import React from 'react'
import { useCounter } from '../hooks/useCounter'

function CounterWithCustomHook () {
  const { counter, changeValue, reset } = useCounter(0)
  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      <button className='btn btn-primary' onClick={() => changeValue(-1)}>-1</button>
      <button className='btn btn-primary' onClick={() => changeValue()}>+1</button>
      <button className='btn btn-primary' onClick={reset}>reset</button>
    </>
  )
}

export default CounterWithCustomHook
