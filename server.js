const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/db');
const formData = require('express-form-data');
require('dotenv').config();
const cors = require('cors');


// Connect Database
connectDB();

app.use(cors({
  origin: "http://localhost:3000",
  credentials:true,     
  optionSuccessStatus:200
}))
  
  app.use(formData.parse())

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/employees', require('./routes/api/employees'));
app.use('/api/hospitals', require('./routes/api/hospitals'));
app.use('/api/patients', require('./routes/api/patients'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));