import { T_RequestAction } from './T_RequestAction'
export const U_Request = (params) => {
  const { request, dispatch, didCancel = false, message } = params

  const TIMEOUT_IN_MILLISECONDS = 10000
  const SUCCESS_STATUS_FLOOR = 100
  const ERROR_STATUS_FLOOR = 400
  const CLIENT_ERROR = 'No network detected or CORS not allowed.'

  const isSuccess = (statusCode) =>
    statusCode >= SUCCESS_STATUS_FLOOR &&
    statusCode < ERROR_STATUS_FLOOR

  dispatch({
    type: T_RequestAction.REQUEST,
    payload: {
      status: message.onRequest,
    },
  })

  request.timeout = TIMEOUT_IN_MILLISECONDS

  // client error (network failure or browser CORS problem)
  request.onerror = () => {
    const statusCode = request.status
    if (!didCancel) {
      dispatch({
        type: T_RequestAction.ERROR,
        payload: {
          status: CLIENT_ERROR,
          code: statusCode,
        },
      })
    }
  }

  request.onload = () => {
    const responseInJSON = JSON.parse(request.response)
    const statusCode = request.status

    if (isSuccess(statusCode)) {
      if (!didCancel) {
        dispatch({
          type: T_RequestAction.SUCCESS,
          payload: {
            data: responseInJSON,
            status: message.onSuccess,
            code: statusCode,
          },
        })

        dispatch({
          type: T_RequestAction.RESET,
          payload: {
            status: message.onDefault,
          },
        })
      }
    } else {
      if (!didCancel) {
        dispatch({
          type: T_RequestAction.ERROR,
          payload: {
            status: JSON.stringify(responseInJSON.error),
            code: statusCode,
          },
        })
      }
    }
  }
}
