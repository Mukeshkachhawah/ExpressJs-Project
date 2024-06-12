const express = require("express");
const productcontroller = require("../controllers/productController");

const router = express.Router();

router.get("/", productcontroller);

module.exports = router;
