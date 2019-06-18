import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'
import Footer from '../Footer'
import SignUp from '../SignUp'
import Welcome from '../Welcome'
import Login from '../Login'
import SingleArticle from '../SingleArticle'
import CreateArticle from '../CreateArticle'
import { Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      authUser: null
    }
  }

  componentWillMount() {
    const user = localStorage.getItem('user')

    if (user) {
      this.setState({
        authUser: JSON.parse(user)
      })
    }
  }

  setAuthUser = (authUser) => {
    this.setState({
      authUser
    }, () => {
      localStorage.setItem('user', JSON.stringify(authUser))
      this.props.history.push('/')
    })
  }

  render() {
    const { location } = this.props
    
    return (
      <div>
        {
          location.pathname !== '/login' && location.pathname !== '/signup' &&
          <Navbar authUser={this.state.authUser} />
        }
        <Route
          exact={true}
          path="/"
          render={
            props => (
              <Welcome
                {...props}
                getArticles={this.props.articlesService.getArticles}
              />
            )
          }
        />
        <Route
          exact
          path="/login"
          render={
            props => (<Login
              {...props}
              setAuthUser={this.setAuthUser}
              loginUser={this.props.authService.loginUser}
            />)
          }
        />
        <Route
          exact
          path="/signup"
          render={
            props => (<SignUp 
              {...props} 
              registerUser={this.props.authService.registerUser}
              setAuthUser={this.setAuthUser}
            />)
          }
        />
        <Route
          exact
          path="/article/:slug"
          render={
            props => (
              <SingleArticle
                {...props}
                getArticle={this.props.articlesService.getArticle}
              />
            )
          }
        />
        <Route
          exact
          path="/articles/create"
          render={
            props => (
              <CreateArticle 
                {...props}
                getArticleCategories={this.props.articlesService.getArticleCategories}
                createArticle={this.props.articlesService.createArticle}
                token={this.state.authUser.token}
              />
            )
          } 
        />
        {
          location.pathname !== '/login' && location.pathname !== '/signup' &&
          <Footer />
        }
      </div>
    )
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  authService: PropTypes.objectOf(PropTypes.func).isRequired
}

export default App