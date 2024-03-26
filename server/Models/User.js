const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : String,
    email : {
        type: String,
        unique : true,
    },
    Followers :Array,
    Following: Array,
    password : String,
    image : String,
    Favourites : Array
})

const userModel = mongoose.model("userdata" , UserSchema)
module.exports = userModel