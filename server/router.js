// Imports
const express = require("express");

// Middleware
const bodyParser = require("body-parser");
// const verifyToken = require("./middleware/token");


// Routers
const userRouter = require("./routes/user");


// Create new Express router
const router = express.Router();

// Set subrouters

router.use(bodyParser.json());
router.use("/user", userRouter);


// Export router
module.exports = router;