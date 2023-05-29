const express = require('express');
const router = express.Router();

// Import Controller 
const {createComment} = require("../controllers/commentController");
const {createPost,getAllPosts} = require("../controllers/postController");
const {likePost,unlikePost} = require("../controllers/likeController");

// Mapping Create
router.post("/comments/create",createComment)
router.post("/posts/create",createPost)
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)

// Export Controller
module.exports = router;