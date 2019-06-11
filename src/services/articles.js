import Axios from 'axios'
import config from '../config'

export default class ArticlesService {
  async getArticleCategories() {
    const response = await Axios.get(`${config.apiUrlL}/categories`)

    return response.data.categories
  }

  createArticle = async (data, token) => {
    const image = await this.uploadToCloudinary(data.image)

    try {
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
      console.log(errors)
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