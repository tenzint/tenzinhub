var express = require('express');
var router = express.Router();
const users = require("../controllers/user.controller.js");

// Create a new user
router.post("/signup", users.create);

module.exports = router;
