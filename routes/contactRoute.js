const express = require('express');
const auth = require('../middleware/authMiddleware');

const {getContact,createContact} = require('../controller/contactController');

const router = express.Router();

// Routes
router.get('/',getContact);
router.get('/:id',getContact);
router.post('/',auth,createContact);


module.exports = router;