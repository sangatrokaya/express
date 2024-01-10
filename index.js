//1. npm init
//2. npm install express - gives node_modules packages
// 3. install nodemon globally for continuous server connection => command: npm install --global nodemon
// 4. replace node with nodemon in dev of package.json
// 5. Install postman

const express = require('express')
const app = express()
const port = 5000
const users = ['ram','shyam','sangat','krish']

app.get('/users', (req, res) => {
  console.log(req.query.startswith)
  const filteredUser = users.filter((item,id)=>{
    if(item.includes(req.query.startswith)){
      return item
    }
  })
  res.send(filteredUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

