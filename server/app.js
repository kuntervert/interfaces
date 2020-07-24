// Initalize env variables
require('dotenv').config();

// Imports
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router');

// Initialize express
const app = express();

// Middleware

app.use(
	cors({
		origin: [ 'https://localhost:3000', 'https://localhost:3001' ],
		credentials: true
	})
);
app.use(cookieParser());

// API router
app.use('/api', router);

// Start express application
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`));

// Export app
module.exports = app;
