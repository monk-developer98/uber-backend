const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddelware = require("../middlewares/auth.middleware") 

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Envalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("fullname is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 character"),
  ],
  userController.registerUser
);

router.post("/login", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be 6 character")
],
    userController.loginUser
)

router.get("/profile", authMiddelware.authUser , userController.getUserProfile)
router.get("/logout", authMiddelware.authUser , userController.logoutUser)


module.exports = router;
