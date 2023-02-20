import axios from 'axios'

const productsServices = {
  getAll: async (category, token) => {
    try {
      let response

      category
        ? (response = await axios.get(`/products?category=${category}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }))
        : (response = await axios.get(`/products`, {
            headers: {
              Authorization: `Bearer ${token}`
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
      const response = await axios.get(`/products/${id}`, {
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
