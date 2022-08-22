import React from 'react'

import { U_Request } from './U_Request'
import { U_RequestReducer } from './U_RequestReducer'

export const U_useRequestSend = (
  method,
  url,
  { data = {}, authorizationToken = [] } = {}
) => {
  const BASE_ENDPOINT = 'http://localhost:4000/v1'
  const requestedEndpoint = `${BASE_ENDPOINT}${url}`

  const stringifiedData = JSON.stringify(data)
  const headers = [authorizationToken, ['Accept', 'application/json']]

  const isHeaderExist = (header) =>
    header !== undefined && header.length > 0

  const request = new XMLHttpRequest()

  request.open(method, requestedEndpoint)

  const initialState = {
    loading: true,
    error: false,
    message: '',
    data: [],
  }

  const [state, dispatch] = React.useReducer(
    U_RequestReducer,
    initialState
  )

  React.useEffect(() => {
    let didCancel = false
    U_Request({ request, dispatch, didCancel })

    return () => {
      didCancel = true
    }
  }, [])

  headers.forEach((header) => {
    if (isHeaderExist(header)) {
      request.setRequestHeader(...header)
    }
  })

  request.send(stringifiedData)

  return state
}
