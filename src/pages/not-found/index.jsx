import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { C_ErrorInfo } from '@components'

const P_NotFound = () => {
  const { url } = useRouteMatch()
  const error = {
    code: '404: Not Found',
    message: `Oops sorry. It seems like '${url}' page no longer exists simply by Thanos action.`,
  }

  return <C_ErrorInfo { ...error } />
}

export default P_NotFound
