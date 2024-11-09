const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();
app.use(express.json());

// Corrected path with leading '/'
app.use('/api/users', require('./routes/UserRoute'));

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
