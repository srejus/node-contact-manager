const File = require("../models/homeModel");

const uploadData = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { originalname, filename, path, size, mimetype } = req.file;

        // Create a new file document
        const file = new File({
            originalName: originalname,
            fileName: filename,
            path: path,
            size: size,
            mimetype: mimetype
        });

        // Save the file document to the database
        await file.save();

        res.status(201).json(file);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    uploadData
};