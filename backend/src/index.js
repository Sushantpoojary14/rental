const express = require('express');
const cors = require('cors');
const route = require('./routes/routeIndex');
const dotenv = require('dotenv');
dotenv.config();
require('./config/db');


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({}));
app.use(express.json());

app.use("/api",route);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 