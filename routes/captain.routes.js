const express = require("express");
const cpatainController = require('../controllers/captain.controller')
const router = express.Router();
const { body } = require("express-validator");
const authMiddelware = require("../middlewares/auth.middleware") 


router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Envalid Email"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("fullname is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be 6 character"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("Color must be 3 character"),
    body("vehicle.plate").isLength({ min: 3 }).withMessage("Plate must be 3 character"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be at least 1 "),
    body("vehicle.vehicleType").isIn([ 'car' , 'motorcycle', 'auto']).withMessage("Invalid Car Type"),
  ],
  cpatainController.registerCaptain
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Envalid Email"),
        body('password').isLength({min:6}).withMessage("Password must be 6 character")
    ],
    cpatainController.loginCaptain
)

router.get('/profile', authMiddelware.authCaptain , cpatainController.getCaptainProfile)
router.get('/logout', authMiddelware.authCaptain , cpatainController.logoutCaptain)


module.exports=router