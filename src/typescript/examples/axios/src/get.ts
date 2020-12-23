import axios from 'axios'
import type { AxiosError } from 'axios'

/**
 * Example: IP アドレスの情報を取得
 */
const baseURL = 'https://ipinfo.io'

axios
  .get('/', { baseURL })
  .then(({ data }) => {
    console.log(data)
  })
  .catch((error: AxiosError) => {
    console.error(error)
  })
