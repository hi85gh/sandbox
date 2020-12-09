import dayjs from 'dayjs'

/* Loading locale */
import 'dayjs/locale/ja'

/* Plugins */
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localeData)

console.log(
  /* English (Default) */
  'Locale(en):',
  dayjs().localeData().months()
)

console.log(
  /* Japanese */
  'Locale(ja):',
  dayjs().locale('ja').localeData().months()
)
