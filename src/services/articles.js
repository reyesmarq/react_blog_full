import Axios from 'axios'
import config from '../config'
import { validateAll } from 'indicative'

export default class ArticlesService {
  async getArticleCategories() {
    const response = await Axios.get(`${config.apiUrlL}/categories`)

    return response.data.categories
  }

  createArticle = async (data, token) => {
    
    if (!data.image) {
      return Promise.reject([
        { message: 'The image is required' }
      ])
    }
    
    try {
      const rules = {
        title: 'required',
        content: 'required',
        category: 'required'
      }

      const messages = {
        required: 'The {{ field }} is required'
      }

      await validateAll(data, rules, messages)
      
      const image = await this.uploadToCloudinary(data.image)
      const response = Axios.post(`${config.apiUrlL}/articles`, {
        title: data.title,
        content: data.content,
        category_id: data.category,
        imageUrl: image.secure_url
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  
      console.log(response)
      return response.data
    } catch (errors) {
      if (errors.response) {
        return Promise.reject(errors.response.data)
      } 

      return Promise.reject(errors)
    }
  }

  async uploadToCloudinary(image) {
    const form = new FormData()
    form.append('file', image)
    form.append('upload_preset', 'ml_default')

    const response = await Axios.post('https://api.cloudinary.com/v1_1/dxpyn6hp7/image/upload', form)

    console.log(response)

    return response.data
  }
}