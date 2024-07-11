import axios from 'axios'
import { API_URL } from '../config'

const productsServices = {
  getAll: async (category, token) => {
    try {
      let response

      category
        ? (response = await axios.get(`${API_URL}/products?category=${category}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Referrer-Policy': 'unsafe-url'
            }
          }))
        : (response = await axios.get(`${API_URL}/products`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Referrer-Policy': 'unsafe-url'
            }
          }))

      const { data: products } = response.data

      return products
    } catch (error) {
      throw new Error('An error occurred. Please try again later')
    }
  },
  getById: async (id, token) => {
    try {
      const response = await axios.get(`${API_URL}/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const { data: product } = response.data
      return product
    } catch (error) {
      throw new Error('An error occurred. Please try again later')
    }
  }
}

export default productsServices
