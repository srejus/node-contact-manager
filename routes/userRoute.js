const express = require('express');

const router = express.Router();

const {getUserData,createUser,loginUser} = require('../controller/userController');
const validateToken = require('../middleware/authMiddleware');

// Routes
router.get("/",validateToken ,getUserData);
router.post("/register",createUser);
router.post("/login",loginUser);

module.exports = router;