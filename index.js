//1. npm init
//2. npm install express - gives node_modules packages
// 3. install nodemon globally for continuous server connection => command: npm install --global nodemon
// 4. replace node with nodemon in dev of package.json
// 5. Install postman

const express = require('express')
const app = express()
const port = 5000
const users = [
  {id:323, name: 'ram', address: 'ktm' },
  {id:511, name: 'sangat', address: 'surkhet' },
  {id:56, name: 'bishwo', address: 'dang' },
  {id:456, name: 'gopal', address: 'butwal' }
]

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id)

  const user = users.find((item) => item.id === userId)
  if (user){
    res.send(user)
  }else{
    res.status(404).send('user not found')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

