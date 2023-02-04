const app = require('./netlify/functions/server')

app.listen(9000, () => {
  console.log('Listening on port 9000...')
})