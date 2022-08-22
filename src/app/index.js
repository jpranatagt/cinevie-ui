import React from 'react'

import { U_useRequestAuthSend } from '@utils'

const App = () => {
  const METHOD = 'GET'
  const URL = '/movies'

  const { loading, error, data, message } = U_useRequestAuthSend(
    METHOD,
    URL
  )

  if (loading) {
    return <div>Requesting to API</div>
  }

  if (error) {
    return <div> {message.error} </div>
  }

  return <div> {JSON.stringify(data)} </div>
}

export default App
