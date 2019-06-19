import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const RedirectIfAuth = ({ path, props, component: Component, isAuthenticated }) => (
  <Route
    path={path}
    render={
      routerProps => {
        if (!isAuthenticated) {
          return <Component {...props} {...routerProps} />
        }

        return <Redirect to ="/" />
      }
    }
  />
)

export default RedirectIfAuth