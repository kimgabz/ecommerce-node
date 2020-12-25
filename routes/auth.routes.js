const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth.middleware");

// import
const { createOrUpdateUser } = require("../controllers/auth.controller");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
