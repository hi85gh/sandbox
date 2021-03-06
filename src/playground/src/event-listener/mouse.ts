/* イベント名は WindowEventMap を参照 */

window.addEventListener('mousedown', (event) => {
  console.log('mousedown', event.clientX, event.clientY)
})

/* window では不可 */
document.addEventListener('mouseenter', (event) => {
  console.log('mouseenter', event.clientX, event.clientY)
})

/* window では不可 */
document.addEventListener('mouseleave', (event) => {
  console.log('mouseleave', event.clientX, event.clientY)
})

window.addEventListener('mousemove', (event) => {
  console.log('mousemove', event.clientX, event.clientY)
})

window.addEventListener('mouseout', (event) => {
  console.log('mouseout', event.clientX, event.clientY)
})

window.addEventListener('mouseover', (event) => {
  console.log('mouseover', event.clientX, event.clientY)
})

window.addEventListener('mouseup', (event) => {
  console.log('mouseup', event.clientX, event.clientY)
})
