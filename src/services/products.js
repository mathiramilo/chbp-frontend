import axios from 'axios'

const productsServices = {
  getAll: async category => {
    let response

    category ? (response = await axios.get(`/products/${category}`)) : (response = await axios.get(`/products`))

    const { data: products } = response.data

    return products
  },
  getById: async id => {
    const response = await axios.get(`/products/${id}`)
    const { data: product } = response.data
    return product
  }
}

export default productsServices
