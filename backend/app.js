const express = require('express');
const cors = require('cors');
const logRoutes = require('./routes/log.route');

const app = express();

// Only allow requests from http://localhost:5173
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true // optional: use only if needed
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/logs', logRoutes);

module.exports = app;
