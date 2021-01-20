import axios from 'axios'
import { toast } from 'react-toastify'

const api = axios.create({
  baseURL: '/.netlify/functions',
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    toast.error(`Falha na requisição: ${error.message}`)
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    let message = `Ocorreu um erro inesperado no servidor.`

    if (error.response.status === 404) {
      message = `A função solicitada não foi encontrada.`
    }

    if (error.response.status === 429) {
      message = `Você está indo rápido demais!`
    }

    toast.error(message, {
      toastId: error.config.url,
    })
    return Promise.reject(error)
  }
)

export default api
