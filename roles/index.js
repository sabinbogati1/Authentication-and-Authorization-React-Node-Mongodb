const Role = require("./Role");
const express = require("express");
const router = express.Router();


router.get("/",Role.getAll);

module.exports = router;