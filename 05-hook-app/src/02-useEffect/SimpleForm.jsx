import React, { useEffect, useState } from 'react'
import Message from './Message'

export default function SimpleForm () {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: ''
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({ ...formState, [name]: value })
  }

  useEffect(() => {}, [])

  // useEffect(() => {
  //   console.log('formState changed')
  // }, [formState])

  // useEffect(() => {
  //   console.log('email changed')
  // }, [email])

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='jhon@doe.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      {username.trim() === 'strider' && <Message />}
    </>
  )
}
