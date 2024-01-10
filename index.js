//1. npm init
//2. npm install express - gives node_modules packages
// 3. install nodemon globally for continuous server connection => command: npm install --global nodemon
// 4. replace node with nodemon in dev of package.json
// 5. Install postman

const express = require('express')
const app = express()
const port = 5000
app.use(express.json()) //function that converts stringified body object into json
const users = [
  { id: 323, name: 'ram', address: 'ktm' },
  { id: 511, name: 'sangat', address: 'surkhet' },
  { id: 56, name: 'bishwo', address: 'dang' },
  { id: 456, name: 'gopal', address: 'butwal' }
]

app.post('/register', (req, res) => {
  const matchedList = users.filter((item,id)=>{
    if (item.name === req.body.name){
      return item
    }
  })
  if (matchedList.length > 0){
    res.json({
      msg: "User already exist!!!"
    })
  }else{
    res.json({
      msg: "Registration successful"
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

