//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  email: { type: String, required: true, unique: true },
  password: String
})

const User = mongoose.model('Login', userSchema)

module.exports = User