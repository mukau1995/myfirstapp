
var QRCode = require('qrcode')
 
QRCode.toDataURL('http://localhost:3000/user', function (err, url) {
  console.log(url)
})