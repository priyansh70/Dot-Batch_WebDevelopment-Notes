const express = require("express");
const router = express.Router();

const { localFileUpload, imageUpload, videoUpload, imageReducer } = require("../controllers/fileUpload");

//api route
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageReducer", imageReducer);

module.exports = router;