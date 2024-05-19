const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const getUploadMiddleware = (fieldName) => {
    return upload.single(fieldName);
};

module.exports = getUploadMiddleware;
