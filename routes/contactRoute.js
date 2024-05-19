const express = require('express');
const auth = require('../middleware/authMiddleware');

const {getContact,createContact,deleteContact} = require('../controller/contactController');

const router = express.Router();

// Routes
router.get('/',auth, getContact);
router.get('/:id',auth, getContact);
router.post('/',auth,createContact);
router.get("/delete/:id",auth, deleteContact);


module.exports = router;