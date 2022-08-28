import React from 'react'
import ReactDOM from 'react-dom'
import PreactDOM from 'preact/compat'

import App from './app'

const container = document.getElementById('app')
const hasChildNodes = container.hasChildNodes()

hasChildNodes
  ? PreactDOM.render(<App />, container, container.firstElementChild)
  : ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      container
    )
