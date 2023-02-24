import axios from 'axios'
import { API_URL } from '../config'

const productsServices = {
  getAll: async (email, token) => {
      try {
          const response = await axios.get(`${API_URL}/orders?email=${email}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          const { data } = response.data
          return data.orders
      } catch (error) {
          throw new Error('An error occurred. Please try again later')
      }
  },
  getById: async (id, token) => {
    try {
      const response = await axios.get(`${API_URL}/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const { data } = response.data
      return data.order
    } catch (error) {
      throw new Error('An error occurred. Please try again later')
    }
  }
}

export default productsServices
