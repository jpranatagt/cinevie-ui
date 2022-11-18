import React from 'react'

import { T_RequestMethod } from './T_RequestMethod'

import { U_RequestReducer } from './U_RequestReducer'
import { U_Request } from './U_Request'

import { U_GenerateNumber } from './U_GenerateNumber'

export const U_useRequest = (url, requestMessage = {}) => {
  const BASE_ENDPOINT = 'https://api.cinevie.jpranata.tech/v1'
  const requestedEndpoint = `${BASE_ENDPOINT}${url}`

  const message = Object.assign(
    {
      onDefault: 'No actions',
      onRequest: 'Requesting',
      onSuccess: 'Succeed',
    },
    requestMessage
  )

  const { GET, POST, PATCH } = T_RequestMethod

  const request = new XMLHttpRequest()

  const initialState = {
    loading: true,
    error: false,
    status: message.onDefault,
    data: [],
    refetch_ref: U_GenerateNumber(),
  }

  const [state, dispatch] = React.useReducer(
    U_RequestReducer,
    initialState
  )

  const requestSend = (data = {}) => {
    const stringifiedData = JSON.stringify(data)

    const isHeaderExist = (header) =>
      header !== undefined && header.length > 0

    const headers = [['Accept', 'application/json']]

    headers.forEach((header) => {
      if (isHeaderExist(header)) {
        request.setRequestHeader(...header)
      }
    })

    request.send(stringifiedData)
  }

  const U_useGetRequest = (data) => {
    request.open(GET, requestedEndpoint)

    React.useEffect(() => {
      let didCancel = false
      U_Request({ request, dispatch, didCancel, message })

      // avoid multiple re-render by putting it inside useEffect
      requestSend(data)

      return () => {
        didCancel = true
      }
    }, [state.refetch_ref])
  }

  const U_useGetAuthRequest = (data) => {
    request.withCredentials = true

    U_useGetRequest(data)
  }

  // state means request could change application condition and/or database
  const U_useStateRequest = (data) => {
    U_Request({ request, dispatch, message })

    requestSend(data)
  }

  const U_useAuthStateRequest = (method, data) => {
    request.open(method, requestedEndpoint)
    request.withCredentials = true

    U_useStateRequest(data)
  }

  const U_usePostRequest = (data) => {
    request.open(POST, requestedEndpoint)
    U_useStateRequest(data)
  }

  const U_usePostAuthRequest = (data) => {
    U_useAuthStateRequest(POST, data)
  }

  const U_usePatchAuthRequest = (data) => {
    U_useAuthStateRequest(PATCH, data)
  }

  const U_usePermissionsCheck = () => {
    U_useGetAuthRequest()
  }

  const U_useLogout = () => {
    U_usePostAuthRequest()
  }

  const requestHandler = {
    dispatch,
    state,
    U_useGetRequest,
    U_useGetAuthRequest,
    U_usePostRequest,
    U_usePostAuthRequest,
    U_usePatchAuthRequest,
    U_usePermissionsCheck,
    U_useLogout,
  }

  return requestHandler
}
