import React from 'react'

import { C_ErrorInfo } from './C_ErrorInfo'
import { C_NotFound } from './C_NotFound'

export const C_Error = ({ statusCode, message }) => {
  const NOT_FOUND_STATUS = 404

  const isNotFound = (statusCode) => statusCode === NOT_FOUND_STATUS

  if (isNotFound(statusCode)) {
    return <C_NotFound />
  }

  const error = {
    code: `${statusCode}: Something Went Wrong`,
    message: message,
  }

  return <C_ErrorInfo {...error} />
}
