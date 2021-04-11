const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        min: 8,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("User", UserSchema);
