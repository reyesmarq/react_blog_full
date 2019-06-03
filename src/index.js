import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateArticle from './components/CreateArticle'
import Login from './components/Login'
import SingleArticle from './components/SingleArticle'
import SignUp from './components/SignUp'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact={true} path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/article/:slug" component={SingleArticle} />
      <Route exact path="/articles/create" component={CreateArticle} />
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()