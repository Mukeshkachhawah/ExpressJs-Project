const express = require("express");
const productController = require("../../controllers/admin/product-Controller");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/id/:id", productController.getProductById);
router.get("/category/:category", productController.getProductsByCategory);
router.get(
  "/subcategory/:sub_category",
  productController.getProductsBySubCategory
);
router.get("/name/:name", productController.getProductsByName);
router.get("/random", productController.getRandomProducts);
router.get("/random_3", productController.getRandomProducts3);
router.get("/random_8", productController.getRandomProducts8);
router.get("/men", productController.getMenProducts);
router.get("/women", productController.getWomenProducts);
router.get("/beauty", productController.getBeautyProducts);

module.exports = router;
