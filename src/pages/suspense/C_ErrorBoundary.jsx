import React from 'react'

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
      <h3>Ups something went wrong.</h3>
    ) : (
      this.props.children
    )
  }
}

export default C_ErrorBoundary
