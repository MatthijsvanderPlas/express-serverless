const express = require('express')
const serverless = require('serverless-http')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello Serverless World!')
})

module.exports.handler = serverless(app)