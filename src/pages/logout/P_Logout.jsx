import React from 'react'
import { useHistory } from 'react-router-dom'

import { U_useRequest, U_usePermissionsUpdate } from '@utils'

const P_Logout = () => {
  const LOGOUT_URL = '/tokens/logout'
  const message = {
    onDefault: 'Logout',
    onRequest: 'Logging out ...',
    onSuccess: 'Logout succeed!',
  }

  const { state, U_useLogout } = U_useRequest(LOGOUT_URL, message)
  const history = useHistory()
  const { U_useRemovePermissions } = U_usePermissionsUpdate()

  const { status } = state

  const handleLogout = () => {
    U_useLogout()
  }

  const isLoggedOut = status === message.onSuccess

  React.useEffect(() => {
    if (isLoggedOut) {
      U_useRemovePermissions()
      setTimeout(() => history.push('/'), 3000)
    }
  }, [status])

  return (
    <section>
      <button onClick={() => handleLogout()}>{status}</button>
    </section>
  )
}

export default P_Logout
