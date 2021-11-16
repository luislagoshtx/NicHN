const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;
  
const UserSchema = Schema({
    name: String,
    lastname: String,
    email:{
        type: String,
        unique: true    
    },
    password: String,
    role: String,
    active: Boolean,
    avatar: String
});

const User = mongoose.model("User", UserSchema);
module.exports = User;