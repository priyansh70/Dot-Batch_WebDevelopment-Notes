const mongoose = require('mongoose');
require("dotenv").config()

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("Database Connection established")
    })
    .catch((err) => {
        // console.error(err)
        console.log("Connection Issues with Database");
        process.exit(1);
    })
}