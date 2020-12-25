import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const axiosInstance = axios.create()
const statuses = [200, 201, 300, 302, 404, 500]

/* Mock */
const mock = new MockAdapter(axiosInstance)
statuses.forEach((status) => {
  mock.onGet(`/${status}`).reply(status)
})

/* validateStatus */

/* Default: status >= 200 && status < 300; */
statuses.forEach((status) => {
  axiosInstance
    .get(`/${status}`)
    .then(() => {
      console.log(`${status}: `, 'ok')
    })
    .catch(() => {
      console.error(`${status}: `, 'ng')
    })
})

/* Define: status < 500; */
statuses.forEach((status) => {
  axiosInstance
    .get(`/${status}`, {
      validateStatus: (num) => num < 500,
    })
    .then(() => {
      console.log(`${status}: `, 'ok')
    })
    .catch(() => {
      console.error(`${status}: `, 'ng')
    })
})
