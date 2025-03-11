const express = require('express')
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user.controller");

router.post("/register",[ 
    body("email").isEmail().withMessage("Envalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("fullname is required"),
    body("password").isLength({min:6}).withMessage("Password must be 6 character"),
],
userController.registerUser
)



module.exports = router