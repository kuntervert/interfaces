// Initalize env variables
require('dotenv').config();

// Imports
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router');
const fs = require('fs');
const https = require('https');
// Initialize express
const app = express();
const options = {
	key: fs.readFileSync('/etc/letsencrypt/live/devert.ee/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/devert.ee/cert.pem'),
	ca: fs.readFileSync('/etc/letsencrypt/live/devert.ee/chain.pem')
};
// Middleware

app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:3001', 'https://devert.ee'],
		credentials: true
	})
);
app.use(cookieParser());

// API router
app.use('/api', router);
var http = require('https').Server(options, app);
// Start express application
http.listen(3000, () => console.log(`App listening on port ${process.env.PORT}`));
// Export app
module.exports = app;