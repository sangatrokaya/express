//1. npm init
//2. npm install express - gives node_modules packages
// 3. install nodemon globally for continuous server connection => command: npm install --global nodemon
// 4. replace node with nodemon in dev of package.json
// 5. Install postman

const express = require('express')
const app = express()
const port = 5000
const users = [
  { name: 'ram', address: 'ktm' },
  { name: 'sangat', address: 'surkhet' },
  { name: 'bishwo', address: 'dang' },
  { name: 'gopal', address: 'butwal' }
]

app.get('/users', (req, res) => {
  const filteredUser = users.filter((item, id) => {
    if (item.name[0] === req.query.startswith && item.name[item.name.length-1] === req.query.endswith) {
      return item
    }
  })
  res.send(filteredUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

