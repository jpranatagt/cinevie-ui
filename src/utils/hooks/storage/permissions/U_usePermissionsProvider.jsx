import React from 'react'

import { U_useRequest } from '@utils'

const isPermissionsValid = (
  grantedPermissions,
  requiredPermissions
) => {
  const movieRead = 'movies:read'
  const movieWrite = 'movies:write'

  if (!grantedPermissions) {
    return false
  }

  if (
    Array.isArray(grantedPermissions) &&
    Array.isArray(requiredPermissions)
  ) {
    if (grantedPermissions.length === 0) {
      return false
    }

    const requiredPermissionsLength = requiredPermissions.length

    const isRead =
      requiredPermissionsLength === 1 &&
      requiredPermissions[0] === movieRead &&
      grantedPermissions[0] === movieRead

    const isWrite =
      requiredPermissionsLength === 2 &&
      requiredPermissions[0] === movieRead &&
      grantedPermissions[0] === movieRead &&
      requiredPermissions[1] === movieWrite &&
      grantedPermissions[1] === movieWrite

    const isValid = isRead || isWrite

    return isValid
  }

  const convertedGranted = Array.from(grantedPermissions)
  const convertedRequired = Array.from(requiredPermissions)

  const convertedRequiredLength = convertedRequired.length

  const isRead =
    convertedRequiredLength === 1 &&
    convertedRequired[0] === movieRead &&
    convertedGranted[0] === movieRead

  const isWrite =
    convertedRequiredLength === 2 &&
    convertedRequired[0] === movieRead &&
    convertedRequired[1] === movieWrite &&
    convertedGranted[1] === movieWrite

  const isValid = isRead || isWrite

  return isValid
}

const permissionsStoreContext = React.createContext()

export const U_usePermissionsStore = () =>
  React.useContext(permissionsStoreContext)

const permissionsUpdateContext = React.createContext()

export const U_usePermissionsUpdate = () =>
  React.useContext(permissionsUpdateContext)

export const U_usePermissionsProvider = ({ children }) => {
  const message = {
    onDefault: 'Checking',
    onRequest: 'Checking permissions ...',
    onSuccess: 'Permissions granted!',
  }

  const PERMISSIONS_URL = '/permissions'
  const { dispatch, state, U_usePermissionsCheck } = U_useRequest(
    PERMISSIONS_URL,
    message
  )

  U_usePermissionsCheck()

  const { loading, data } = state

  const updatePermissions = (permissions) => {
    const UPDATE_TYPE = 'update'

    dispatch({
      type: UPDATE_TYPE,
      payload: {
        data: {
          permissions,
        },
      },
    })
  }

  const U_useAddPermissions = () => {
    const REFETCH_TYPE = 'refetch'
    dispatch({
      type: REFETCH_TYPE,
    })

    updatePermissions(data)
  }

  const U_useRemovePermissions = () => updatePermissions([])

  const dispatchPermissions = {
    U_useAddPermissions,
    U_useRemovePermissions,
  }

  if (loading) {
    return <div />
  }

  return (
    <permissionsUpdateContext.Provider value={dispatchPermissions}>
      <permissionsStoreContext.Provider value={data}>
        {children}
      </permissionsStoreContext.Provider>
    </permissionsUpdateContext.Provider>
  )
}

export const U_useIsPermitted = (requiredPermissions = []) => {
  const { permissions } = U_usePermissionsStore()
  const isPermitted = isPermissionsValid(
    permissions,
    requiredPermissions
  )

  return isPermitted
}

export const U_useIsAuthenticated = () => {
  const { permissions } = U_usePermissionsStore()
  const moviesRead = ['movies:read']
  const isAuthenticated = isPermissionsValid(permissions, moviesRead)

  return isAuthenticated
}

export const U_useLogoutPermissions = () => {
  const LOGOUT_URL = '/tokens/logout'
  const message = {
    onDefault: 'LOGOUT',
    onRequest: 'LOGGING OUT',
    onSuccess: 'LOGOUT SUCCESS',
  }

  const { state, U_useLogoutRequest } = U_useRequest(
    LOGOUT_URL,
    message
  )
  const { U_useRemovePermissions } = U_usePermissionsUpdate()

  const { status } = state

  const U_useLogout = () => {
    U_useLogoutRequest()
  }

  const isLoggedOut = status === message.onSuccess

  React.useEffect(() => {
    if (isLoggedOut) {
      setTimeout(() => U_useRemovePermissions(), 3000)
    }
  }, [status])

  return { status, U_useLogout }
}
