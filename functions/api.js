const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()


router.get('/', (req, res) => {
  res.send('App is running...')
})

router.post('/', (req, res) => {
  res.send('Post added...')
})



app.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app)