import axios from 'axios'
import { API_URL } from '../config'

const paymentsServices = {
  createPreference: async (cartId, buyerId, address, token) => {
    try {
      const response = await axios.post(
        `${API_URL}/payments/create-preference`,
        {
          cartId,
          buyerId,
          address
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      const { data } = response.data
      return data
    } catch (error) {
      throw new Error('An error occurred. Please try again later')
    }
  }
}

export default paymentsServices
