const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err, result) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("database connected");
        }
    }
);

module.exports = db;
