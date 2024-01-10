// Install mongoose- npm i mongoose

const express = require('express')
const app = express()
const port = 5000
app.use(express.json()) //function that converts stringified body object into json
const connection = require('./db/connection')
const User = require('./models/user')
connection()


app.post('/register', (req, res) => {
  User.create(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

