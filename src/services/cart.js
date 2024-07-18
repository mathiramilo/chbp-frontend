import axios from 'axios'
import { API_URL } from '../config'

const cartServices = {
  getProducts: async (cartId, token) => {
    try {
      const response = await axios.get(`${API_URL}/cart/${cartId}/products`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const { data: products } = response.data
      return products
    } catch (error) {
      throw new Error('An error occurred. Please try again later')
    }
  },
  addProduct: async (cartId, productId, size, token) => {
    try {
      const response = await axios.post(
        `${API_URL}/cart/${cartId}/products/${productId}`,
        {
          size
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      const { data: updatedCart } = response.data
      return updatedCart
    } catch (error) {
      throw new Error('An error occurred. Please try again later')
    }
  },
  removeProduct: async (cartId, productId, size, token) => {
    try {
      const response = await axios.delete(`${API_URL}/cart/${cartId}/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          size
        }
      })
      const { data: updatedCart } = response.data
      return updatedCart
    } catch (error) {
      throw new Error('An error occurred. Please try again later')
    }
  },
  decreaseProduct: async (cartId, productId, size, token) => {
    try {
      const response = await axios.put(
        `${API_URL}/cart/${cartId}/products/${productId}/decrease`,
        {
          size
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      const { data: updatedCart } = response.data
      return updatedCart
    } catch (error) {
      throw new Error('An error occurred. Please try again later')
    }
  },
  checkout: async (cartId, buyerId, address, payment, token) => {
    try {
      const response = await axios.post(
        `${API_URL}/cart/${cartId}/checkout`,
        {
          buyerId,
          address,
          payment
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

export default cartServices
