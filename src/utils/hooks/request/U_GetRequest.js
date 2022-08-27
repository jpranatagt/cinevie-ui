import { T_RequestAction } from './T_RequestAction'
export const U_GetRequest = (params) => {
  const { request, dispatch, didCancel } = params

  const TIMEOUT_IN_MILLISECONDS = 10000
  const SUCCESS_STATUS_FLOOR = 100
  const ERROR_STATUS_FLOOR = 400
  const CLIENT_ERROR =
    'No network detected or problem with browser CORS settings.'

  const isSuccess = (statusCode) =>
    statusCode >= SUCCESS_STATUS_FLOOR &&
    statusCode < ERROR_STATUS_FLOOR

  request.timeout = TIMEOUT_IN_MILLISECONDS

  // client error (network failure or browser CORS problem)
  request.onerror = () => {
    if (!didCancel) {
      dispatch({
        type: T_RequestAction.ERROR,
        payload: {
          message: CLIENT_ERROR,
        },
      })
    }
  }

  request.onload = () => {
    const responseInJSON = JSON.parse(request.response)

    if (isSuccess(request.status)) {
      if (!didCancel) {
        dispatch({
          type: T_RequestAction.SUCCESS,
          payload: {
            data: responseInJSON,
          },
        })
      }
    } else {
      if (!didCancel) {
        dispatch({
          type: T_RequestAction.ERROR,
          payload: {
            message: responseInJSON,
          },
        })
      }
    }
  }
}
