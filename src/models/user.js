const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String, // String is shorthand for {type: String}
  password: String,
  phoneNumber: Number,
  address: {permanentAddress: String, temporaryAddress: String}
});

const User = mongoose.model('User', userSchema);
module.exports = User