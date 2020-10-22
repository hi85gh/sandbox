/* イベント名は WindowEventMap を参照 */

window.addEventListener('click', (event) => {
  /* マウスでクリックしたピクセルの座標をコンソールに表示 */
  console.log('click', event.clientX, event.clientY)
})
