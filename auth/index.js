const Auth = require("./Auth");
const LogIn = require("./Login");

const express = require("express");
const router = express.Router();

router.get("/", Auth.testing);
router.post("/signup/admin", Auth.adminSignup);
router.post("/signup/client", Auth.clientSignup);
router.post("/signup/serviceProvider", Auth.serviceProviderSignup);
router.post("/login", LogIn.login);


module.exports = router;
