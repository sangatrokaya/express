const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.use(express.json()) //function that converts stringified body object into json
const connection = require('./db/connection')
const User = require('./models/user')
connection()


app.post('/register', async(req, res) => {
  await User.create(req.body)
})


app.get('/users', async(req, res) => {
  const list = await User.find()
  console.log(list)
  if (list) res.json({list})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

