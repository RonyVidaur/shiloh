const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req ,res) => {
  res.send('Im a chatbot')
})

/* Facebook configuration
  TODO
*/
app.listen(app.get('port'), () => {
  console.log('running on port', app.get('port'))
})
