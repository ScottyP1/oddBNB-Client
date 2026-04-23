import axios from 'axios'

export const API_BASE_URL = 'https://oddbnb-server-production.up.railway.app/'

export const api = axios.create({
  baseURL: API_BASE_URL,
  // withCredentials: true,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
