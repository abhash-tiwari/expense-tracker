const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/transactions', require('./routes/transactions'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
