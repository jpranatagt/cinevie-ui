import React from 'react'
import ReactDOM from 'react-dom/client'
import PreactDOM from 'preact/compat'

import App from './app'

const rootElement = document.getElementById('app')
const hasChildNodes = rootElement.hasChildNodes()

// react 18 deprecated previous react-dom declaration
const root = ReactDOM.createRoot(rootElement)

hasChildNodes
  ? PreactDOM.render(
      <App />,
      rootElement,
      rootElement.firstElementChild
    )
  : root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
