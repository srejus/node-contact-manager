const express = require("express");
const getUploadMiddleware = require('../middleware/uploadMiddleware');

const {uploadData} = require("../controller/homeController");

const router = express.Router();

router.post('/upload/:fieldName', (req, res, next) => {
    const fieldName = req.params.fieldName;
    const uploadMiddleware = getUploadMiddleware(fieldName);
    uploadMiddleware(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: 'Upload error', error: err });
        }
        next();
    });
}, uploadData);

module.exports = router;