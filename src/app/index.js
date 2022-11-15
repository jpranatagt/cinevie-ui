import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { P_Routes } from '@pages'

import Routes from './Routes'

import { C_Navigation } from '@components'

const App = () => {
  return (
    <Router>
      <C_Navigation />
      <Routes routes={P_Routes} />
    </Router>
  )
}

export default App
