import axios from 'axios'
import type { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://httpbin.org/',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  responseType: 'json'
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default axiosInstance
