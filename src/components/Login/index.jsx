import React from 'react'
import LoginForm from './LoginForm'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }
  
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const user = await this.props.loginUser(this.state)
      localStorage.setItem('user', JSON.stringify(user))
      this.props.setAuthUser(user)
      this.props.history.push('/');
    } catch (errors) {
      this.setState({ errors })
    }
  }

  render() {
    return (<LoginForm 
      handleInputChange={this.handleInputChange}
      handleSubmit={this.handleSubmit}
    />)
  }
}

export default Login