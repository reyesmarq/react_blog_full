import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateArticle from './components/CreateArticle'
import Login from './components/Login'
import SingleArticle from './components/SingleArticle'
import SignUp from './components/SignUp'

import AuthService from './services/auth'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
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
        <Route exact={true} path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" render={
          (props) => <SignUp {...props} 
            registerUser={this.props.authService.registerUser}
            setAuthUser={this.setAuthUser} />
        }/>
        <Route exact path="/article/:slug" component={SingleArticle} />
        <Route exact path="/articles/create" component={CreateArticle} />
        {
          location.pathname !== '/login' && location.pathname !== '/signup' &&
          <Footer />
        }
      </div>
    )
  }
}

const Main = withRouter((props) => (
  <App authService={ new AuthService() } {...props} />
))

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()