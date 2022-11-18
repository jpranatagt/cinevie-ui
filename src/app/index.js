import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { U_usePermissionsProvider } from '@utils'

import { P_Routes } from '@pages'

import Routes from './Routes'

import { C_Navigation } from '@components'

const App = () => {
  return (
    <Router>
      <U_usePermissionsProvider>
        <C_Navigation />
        <Routes routes={P_Routes} />
      </U_usePermissionsProvider>
    </Router>
  )
}

export default App
