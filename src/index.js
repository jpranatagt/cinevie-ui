import React from 'react'
import ReactDOM from 'react-dom'
import PreactDOM from 'preact/compat'

import App from './app'

const rootElement = document.getElementById('app')
const hasChildNodes = rootElement.hasChildNodes()

hasChildNodes
  ? PreactDOM.render(
      <App />,
      rootElement,
      rootElement.firstElementChild
    )
  : ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootElement
    )
