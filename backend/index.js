require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

const userRoutes = require('./routes/users');
const propertyRoutes = require('./routes/properties');

app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

module.exports = app;

