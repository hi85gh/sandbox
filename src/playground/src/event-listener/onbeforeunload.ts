/* ページを離れる時に確認する */
window.addEventListener('beforeunload', (event) => {
  console.log('beforeunload')

  /* .preventDefault() は Google Chrome 非対応 */
  event.preventDefault()

  /* Google Chrome に対応する */
  event.returnValue = ''
})
