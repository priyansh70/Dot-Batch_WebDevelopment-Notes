// Import express framework 
const express = require('express');

// create app using express 
const app = express();

// Port Communication Endpoint
const port = 3000;

// Get REquest 
app.get("/",(req,res) => {
    res.send(`<h1>This is Home Page</h1>`)
})

// Response on port if any activity done at port 
app.listen(port,()=>{
    console.log(`Running at ${port}`);
})

// Add Middleware 
app.use(express.json())


// // Post REquest 
// app.post("/car",(req,res) => {

// })