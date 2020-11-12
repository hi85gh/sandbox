import QRCode from 'qrcode'

QRCode.toString('Hello, World!', { type: 'terminal' }).then((url) => {
  console.log(url)
})
