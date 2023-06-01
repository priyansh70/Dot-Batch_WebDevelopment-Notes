const express = require('express')
const router = express.Router();

const { login, signup } = require("../Controller/Auth");
const { auth, isAdmin, isStudent } = require("../middleware/auth")

router.post("/signup", signup);
router.post("/login", login);

// Testing Route for Middleware
router.get("/test", auth, (req,res) => {
    res.json({
        success: true,
        message: "Test successful"
    })
})

// Protected Route for Student
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Student"
    })
});

// Protected Route for Admin 
router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Admin"
    })
});

module.exports = router;