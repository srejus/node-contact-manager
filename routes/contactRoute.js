const express = require('express');

const {getContact,createContact} = require('../controller/contactController');

const router = express.Router();

// Routes
router.get('/',getContact);
router.get('/:id',getContact);
router.post('/',createContact);


module.exports = router;