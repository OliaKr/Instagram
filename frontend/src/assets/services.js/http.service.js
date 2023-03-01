import Axios from 'axios'

const BASE_URL = 'http://localhost:4000/api/'

export const httpService = {
  get(endpoint, data) {
    try {
      console.log(`${BASE_URL}${endpoint}`)
      return Axios.get(`${BASE_URL}${endpoint}`, data)
    } catch (error) {
      console.log(error)
    }
  },
  post(endpoint, data) {
    try {
      let users = Axios.post(`${BASE_URL}${endpoint}`, data)
      return users
    } catch (error) {
      console.log(error)
    }
  },
  put(endpoint, data) {
    try {
      return Axios.put(`${BASE_URL}${endpoint}`, data)
    } catch (error) {
      console.log(error)
    }
  },
  delete(endpoint, data) {
    try {
      return Axios.delete(`${BASE_URL}${endpoint}`, data)
    } catch (error) {
      console.log(error)
    }
  },
}
