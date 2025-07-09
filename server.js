//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');

require('./connection');
const User = require('./Model/login');
const Contact = require('./Model/contact'); // New contact model

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello from Auth API');
});

// ----------------------------
// Signup API
// ----------------------------
app.post('/s', async (req, res) => {
  try {
    const { name, address, phone, email, password } = req.body;
    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).send({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, address, phone, email, password: hashedPassword });
    await newUser.save();
    res.send({ message: 'Signup successful' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error in signup' });
  }
});

// ----------------------------
// Login API
// ----------------------------
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send({ message: 'Incorrect password' });

    res.send({ message: 'Login successful', user });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error in login' });
  }
});

// ----------------------------
// Users - Admin Utility
// ----------------------------
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.delete('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: 'User deleted' });
});

app.put('/update/:id', async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// ----------------------------
// CONTACT ROUTES
// ----------------------------

// Add a new contact
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, phone, email, userId } = req.body;
    const newContact = new Contact({ name, phone, email, createdBy: userId });
    await newContact.save();
    res.status(201).send({ message: 'Contact added', contact: newContact });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error adding contact' });
  }
});

// Get all contacts of a user
app.get('/api/contacts/:userId', async (req, res) => {
  try {
    const contacts = await Contact.find({ createdBy: req.params.userId });
    res.send(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error fetching contacts' });
  }
});

// Delete a contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.send({ message: 'Contact deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error deleting contact' });
  }
});

// Update a contact
app.put('/api/contacts/:id', async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updated);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error updating contact' });
  }
});

// ----------------------------
// Start Server
// ----------------------------
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});