const express = require('express')
const router = express.Router();
const User = require("../Models/User");

const { login, signup } = require("../Controller/Auth");
const { auth, isAdmin, isStudent } = require("../middleware/auth")

router.post("/signup", signup);
router.post("/login", login);

// Testing Route for Middleware
router.get("/test", auth, (req, res) => {
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

router.get("/getEmail", auth, async (req, res) => {
    try{    
        const id = req.user.id;
        console.log(id)
        const user = await User.findOne({_id:id});

        res.status(200).json({
            success : true,
            user : user,
            message : "Welcome to Email Route"
        })
    }       
    catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        })
    } 
})

module.exports = router;