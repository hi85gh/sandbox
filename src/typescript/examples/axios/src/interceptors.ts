import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const axiosInstance = axios.create()

/* Mock */
const mock = new MockAdapter(axiosInstance)
mock.onGet('/api').reply(200, { message: 'Hello, World!' })

/* Interceptors */
axiosInstance.interceptors.request.use((config) => {
  console.log('Request url: ', config.url)
  console.log('Request params: ', config.params)

  if (/^(post|put|patch)$/i.test(config.method || '')) {
    console.log('Request data: ', config.data)
  }

  return config
})

axiosInstance.interceptors.response.use((response) => {
  console.log('Response url: ', response.config.url)
  console.log('Response status: ', response.status)
  console.log('Response data: ', response.data)

  return response
})

axiosInstance.get('/api')
