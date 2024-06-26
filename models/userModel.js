const mongoose = require('mongoose');


const userScheme = mongoose.Schema({
    username:{
        type:String,
        requried:[true, "'username' is requried"]
    },
    password: {
        type:String,
        required:[true, "'password' is required"]
    },
    email: {
        type:String,
        requried: [true, "'email' is required"],
        unique: [true, "Email already exists"]
    }
},
{
    timestamps:true
}
)

const user = mongoose.model("user",userScheme);

module.exports = user;