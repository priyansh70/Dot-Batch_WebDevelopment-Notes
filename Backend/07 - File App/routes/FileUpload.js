const express = require('express');
const router = express.Router();
// const File = require("../models/File");

// Import Controller 
// const {imageUpload,videoUpload,imageReducer,localFileUpload} = require("../controller/fileUpload");
const {localFileUpload} = require("../controller/fileUpload");

// API Route 
router.post("/localFileUpload",localFileUpload)

module.exports = router;
