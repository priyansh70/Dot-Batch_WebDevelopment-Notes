// app create 
const express = require('express')
const app = express()

// find PORT 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middlewares 
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

// DB Connection 
require("./config/database").connect();

// Cloud Connection 
const cloudinary = require("./config/cloundinary");
cloudinary.cloudinaryConnect();

// api route mounting 
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload",Upload);

// activate Server 
app.listen(PORT,()=>{
    console.log(`App is Running at ${PORT}`);
});

// Default Route 
app.get("/",(req,res) => {
    res.send("Welcome");
})