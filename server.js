const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: ['http://localhost:5173'],
};
app.use(cors(corsOptions));


connectDB();
app.use(express.json());

// Corrected path with leading '/'
app.use('/api/users', require('./routes/UserRoute'));
app.use('/api/job', require('./routes/JobRoute'));
app.use('/api/job-application', require('./routes/JobApplication'));
app.use('/api/job-offer', require('./routes/JobOffer'));




const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
