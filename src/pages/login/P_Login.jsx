import React from 'react'

import { U_useRequest } from '@utils'

const P_Login = () => {
  const [values, setValues] = React.useState({})
  const AUTHENTICATION_URL = '/tokens/authentication'

  const { U_usePostRequest } = U_useRequest(AUTHENTICATION_URL)

  const handleChange = (event) => {
    event.preventDefault()

    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    U_usePostRequest(values)
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
        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default P_Login
