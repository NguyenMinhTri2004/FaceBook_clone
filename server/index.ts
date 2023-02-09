const express = require('express');

require('dotenv').config();

const cors = require('cors');

// const connectDB = require('./utils/connectDb');


// connectDB()

const port = process.env.PORT || 8000 ;

const app = express();

app.use(cors());

app.listen(port , console.log(`server running on port ${port}`));
