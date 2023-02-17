import axios from 'axios'

const authServices = {
  register: async (fullName, email, password, phone) => {
    try {
      const response = await axios.post('/auth/register', {
        fullName,
        email,
        password,
        phone
      })

      const data = response.data

      return data
    } catch (error) {
      const details = error.response.data

      if (details.error.startsWith('E11000')) {
        throw new Error('The email you entered already exists')
      } else {
        throw new Error('An error occurred. Please try again later')
      }
    }
  },

  login: async (email, password) => {
    try {
      const response = await axios.post('/auth/login', {
        email,
        password
      })

      const data = response.data

      return data
    } catch (error) {
      throw new Error('Invalid email or password')
    }
  }
}

export default authServices
