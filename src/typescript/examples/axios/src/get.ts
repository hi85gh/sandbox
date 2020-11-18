import axios from 'axios'

/**
 * Example: IP アドレスの情報を取得
 */
const baseURL = 'https://ipinfo.io'

axios
  .get('/', { baseURL })
  .then(({ data }) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
