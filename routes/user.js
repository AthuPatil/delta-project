const  express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

router.route("/signup").get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

//router.get("/signup",userController.renderSignupForm);
//router.post("/signup",wrapAsync(userController.signup));

router.route("/login").get(userController.renderLoginForm)
.post(savedRedirectUrl,passport.authenticate("local",{failureRedirect:"/login" , failureFlash : true}) ,wrapAsync(userController.login));


//router.get("/login",userController.renderLoginForm);
//router.post("/login",savedRedirectUrl,passport.authenticate("local",{failureRedirect:"/login" , failureFlash : true}) ,wrapAsync(userController.login));

router.get("/logout",userController.logout);

module.exports = router;
