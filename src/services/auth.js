import { validateAll } from 'indicative'
import Axios from 'axios'
import config from '../config'


export default class AuthService {

  async registerUser(data) {

    const rules = {
      name: 'required|string',
      email: 'required|email',
      password: 'required|string|min:6|confirmed'
    }

    const messages = {
      required: 'This {{ field }} is required',
      'email.email': 'invalid email',
      'password.confirmed': 'The password confirmation does not match'
    }

    try {
      
      await validateAll(data, rules, messages)

      const response = await Axios.post(`${config.apiUrlL}/auth/register`, {
        name: data.name,
        email: data.email,
        password: data.password
      })
    
      return response.data.data
      
    } catch (errors) {
      
      // show errors to the user
      const formattedErrors = {}

      if (errors.response.status === 422) {
        formattedErrors['email'] = errors.response.data['email'][0]

        return Promise.reject(formattedErrors)
      }
      
      errors.forEach(error => formattedErrors[error.field] = error.message)

      return Promise.reject(formattedErrors)
      
    }
    
  }

  async loginUser(data) {

    const rules = {
      email: 'required|email',
      password: 'required|string'
    }

    const messages = {
      required: 'This {{ field }} is required',
      'email.email': 'invalid email',
    }

    try {
      
      await validateAll(data, rules, messages)

      const response = await Axios.post(`${config.apiUrlL}/auth/login`, {
        email: data.email,
        password: data.password
      })
    
      return response.data.data
      
    } catch (errors) {
      
      // show errors to the user
      const formattedErrors = {}

      if (errors.response.status === 401) {
        formattedErrors['email'] = 'Invalid credentials'

        return Promise.reject(formattedErrors)
      }
      
      errors.forEach(error => formattedErrors[error.field] = error.message)

      return Promise.reject(formattedErrors)
      
    }
    
  }
  
}

