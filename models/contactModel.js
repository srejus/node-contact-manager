const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
        user_id:{
            type:mongoose.Schema.ObjectId,
            required: true,
            ref: "user"
        },
        name: {
            type:String,
            required: [true, "Please enter name"]
        },
        email: {
            type:String,
            requried: [true, "Please enter email"]
        },
        phone: {
            type: Number,
            required: [true, "Please enter phone"]
        }
    },
    {
        timestamps: true
    }
)

const contact = mongoose.model("contact",contactSchema);

module.exports = contact;