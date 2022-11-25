import React from 'react'

import { U_useRequest, U_usePermissionsUpdate } from '@utils'

const P_Logout = () => {
  const LOGOUT_URL = '/tokens/logout'
  const message = {
    onDefault: 'Logout',
    onRequest: 'Logging out ...',
    onSuccess: 'Logout succeed!',
  }

  const { state, U_useLogout } = U_useRequest(LOGOUT_URL, message)
  const { U_useRemovePermissions } = U_usePermissionsUpdate()

  const { status } = state

  const handleLogout = () => {
    U_useLogout()
  }

  const isLoggedOut = status === message.onSuccess

  React.useEffect(() => {
    if (isLoggedOut) {
      setTimeout(() => U_useRemovePermissions(), 3000)
    }
  }, [status])

  return (
    <section>
      <button onClick={() => handleLogout()}>{status}</button>
    </section>
  )
}

export default P_Logout
