// Imports
const express = require("express");

// Middleware
const bodyParser = require("body-parser");
const verifyToken = require("./middleware/token");


// Routers
const userRouter = require("./routes/user");
const postsRouter = require("./routes/posts")
// Create new Express router
const router = express.Router();

// Set subrouters

router.use(bodyParser.json());
router.use("/user", verifyToken, userRouter);
// router.use("/post", postsRouter)


// Export router
module.exports = router;