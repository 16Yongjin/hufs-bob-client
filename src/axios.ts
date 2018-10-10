import axios from 'axios'

const baseURL = 'http://192.168.0.11:3000'

export default axios.create({
  baseURL
})
