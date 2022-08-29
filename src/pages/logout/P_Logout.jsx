import React from 'react'

import { U_useRequest } from '@utils'

const P_Logout = () => {
  const LOGOUT_URL = '/tokens/logout'
  const message = {
    onDefault: 'Logout',
    onRequest: 'Logging out ...',
    onSuccess: 'Logout succeed!',
  }

  const { state, U_usePostAuthRequest } = U_useRequest(
    LOGOUT_URL,
    message
  )
  const { status } = state

  const handleLogout = () => {
    U_usePostAuthRequest()
  }

  return (
    <section>
      <button onClick={() => handleLogout()}>{status}</button>
    </section>
  )
}

export default P_Logout
