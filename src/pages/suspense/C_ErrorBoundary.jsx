import React from 'react'

import { C_Error } from '@components'

class C_ErrorBoundary extends React.Component {
  constructor() {
    super()

    this.state = {
      hasErrored: false,
    }
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return {
      hasErrored: true,
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }

  render() {
    return this.state.hasErrored ? (
      <C_Error
        statusCode="500"
        message="Ups something went wrong please come back later."
      />
    ) : (
      this.props.children
    )
  }
}

export default C_ErrorBoundary
