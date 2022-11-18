import React from 'react'

import { U_useRequest } from '@utils'

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
