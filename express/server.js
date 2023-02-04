const express = require('express')
const serverless = require('serverless-http')
const app = express()
const router = express.Router()

app.use('./.netlify/functions/server', router)
app.use('/', router)

router.get('/', (req, res) => {
  res.writeHead(200, { "content-type": "text/html" })
  res.write('<h1>Up and running!</h1>')
  res.end()
})

app.get('/about', (req, res) => {
  const url = req.url
  const user = req.ip
  console.log(url, ip)
  res.status(200).send('About page')
})

module.exports.handler = serverless(app)