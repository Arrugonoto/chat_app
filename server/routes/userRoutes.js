const express = require("express");

// controller functions
const { signupUser, loginUser } = require("../controllers/userController");

// router
const router = express.Router();

// login
router.post("/login", loginUser);

// signup
router.post("/signup", signupUser);

module.exports = router;
