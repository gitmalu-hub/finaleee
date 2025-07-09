//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Login', // this links the contact to the user
    required: true
  }
});

module.exports = mongoose.model('Contact', contactSchema);