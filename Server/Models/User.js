const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    paswword:String,
});

module.exports = mongoose.model("users",userSchema);