import React from 'react'

import { U_useRequest } from '@utils'

const P_Login = () => {
  const initialValues = {
    email: '',
    password: '',
  }
  const [values, setValues] = React.useState(initialValues)

  const AUTHENTICATION_URL = '/tokens/authentication'
  const message = {
    onDefault: 'Login',
    onRequest: 'Loggin in ...',
    onSuccess: 'Login success!',
  }

  const { state, U_usePostAuthRequest } = U_useRequest(
    AUTHENTICATION_URL,
    message
  )
  const { status } = state

  const handleChange = (event) => {
    event.preventDefault()

    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    U_usePostAuthRequest(values)

    setValues(initialValues)
  }

  return (
    <section>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Email: </label>
        <input
          name="email"
          type="email"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <label>Password: </label>
        <input
          name="password"
          type="password"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <button type="submit">{status}</button>
      </form>
    </section>
  )
}

export default P_Login
