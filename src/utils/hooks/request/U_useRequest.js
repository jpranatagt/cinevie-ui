import React from 'react'

import { T_RequestMethod } from './T_RequestMethod'

import { U_RequestReducer } from './U_RequestReducer'
import { U_PostRequest } from './U_PostRequest'
import { U_GetRequest } from './U_GetRequest'

export const U_useRequest = (url) => {
  const BASE_ENDPOINT = 'http://localhost:4000/v1'
  const requestedEndpoint = `${BASE_ENDPOINT}${url}`

  const { GET, POST } = T_RequestMethod

  const request = new XMLHttpRequest()

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
      U_GetRequest({ request, dispatch, didCancel })

      return () => {
        didCancel = true
      }
    }, [])

    requestSend(data)
  }

  const U_usePostRequest = (data) => {
    request.open(POST, requestedEndpoint)

    U_PostRequest({ request, dispatch })

    requestSend(data)
  }

  const requestHandler = {
    state,
    U_useGetRequest,
    U_usePostRequest,
  }

  return requestHandler
}
