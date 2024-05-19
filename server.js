require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const contactRouter = require('./routes/contactRoute');
const userRouter = require('./routes/userRoute');
const homeRouter = require('./routes/homeRoute');

const app = express()
app.use(express.json());

// app.use(errorHandler)
app.use('/api/contacts', contactRouter);
app.use('/api/users',userRouter);
app.use("/api", homeRouter);


app.listen(process.env.PORT, () => {
    console.log("Server running on port "+process.env.PORT)
})


// DB connection
mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("Connected to Database!");
})
.catch(() => {
    console.log("Connection failed!");
})

