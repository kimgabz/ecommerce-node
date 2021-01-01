const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

// controller
const { create, read } = require("../controllers/product.controller");

// routes
router.post("/product", authCheck, adminCheck, create);
router.get("/products", read);

module.exports = router;