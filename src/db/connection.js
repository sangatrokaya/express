const mongoose = require('mongoose'); // Mongoose library imported

const connection = async () => {
  const isConnected = await mongoose.connect('mongodb://127.0.0.1:27017/broadwayDb');
  if (isConnected){
    console.log("Connected to mongodb")
  }else{
    console.log("Connection issue!!")
  }
}

module.exports = connection