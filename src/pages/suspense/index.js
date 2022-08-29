import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'

import C_ErrorBoundary from './C_ErrorBoundary'

export const P_Suspense = (props) => {
  const { children = defaultChildren } = props

  return (
    <C_ErrorBoundary>
      <Suspense fallback={<div />}>
        <Switch>{children}</Switch>
      </Suspense>
    </C_ErrorBoundary>
  )
}

const defaultChildren = <section> No children to render. </section>
