// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to local MongoDB
mongoose.connect('mongodb://localhost:27017/suvaiApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Schema
const joinUsSchema = new mongoose.Schema({
  role: String,
  name: String,
  address: String,
  contact: String,
  email: String,
  cuisine: String,
  experience: String
});

// Model
const JoinUs = mongoose.model('JoinUs', joinUsSchema, 'joinUsForms');

// POST Route
app.post('/api/submit-form', async (req, res) => {
  try {
    const form = new JoinUs(req.body);
    await form.save();
    res.status(201).send({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Submission failed!' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
