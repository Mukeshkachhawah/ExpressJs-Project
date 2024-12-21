const mongoose = require("mongoose");
const ProductCollection = require("../../models/Product");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    } = req.body;

    console.log(averageReview, "averageReview");

    const newlyCreatedProduct = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    });

    await newlyCreatedProduct.save();
    res.status(201).json({
      success: true,
      data: newlyCreatedProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    } = req.body;

    let findProduct = await Product.findById(id);
    if (!findProduct)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    findProduct.title = title || findProduct.title;
    findProduct.description = description || findProduct.description;
    findProduct.category = category || findProduct.category;
    findProduct.brand = brand || findProduct.brand;
    findProduct.price = price === "" ? 0 : price || findProduct.price;
    findProduct.salePrice =
      salePrice === "" ? 0 : salePrice || findProduct.salePrice;
    findProduct.totalStock = totalStock || findProduct.totalStock;
    findProduct.image = image || findProduct.image;
    findProduct.averageReview = averageReview || findProduct.averageReview;

    await findProduct.save();
    res.status(200).json({
      success: true,
      data: findProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    res.status(200).json({
      success: true,
      message: "Product delete successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

const getMenProducts = async (req, res) => {
  try {
    const products = await ProductCollection.find({
      $or: [
        { category: { $regex: /men/i } }, // Matches 'men' in the category field
        { sub_category: { $regex: /men/i } }, // Matches 'men' in the sub_category field
      ],
    });
    if (products.length) {
      return res.status(200).json({
        success: true,
        count: products.length,
        data: products,
      });
    }
    res.status(404).json({ success: false, message: "No Men products found" });
  } catch (error) {
    console.error(`Error fetching Men products: ${error.message}`);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Men products" });
  }
};
const getWomenProducts = async (req, res) => {
  try {
    const products = await ProductCollection.find({
      $or: [
        { category: { $regex: /women/i } }, // Matches 'Women' in the category field
        { sub_category: { $regex: /women/i } }, // Matches 'Women' in the sub_category field
      ],
    });

    if (products.length) {
      return res.status(200).json({
        success: true,
        count: products.length,
        data: products,
      });
    }

    res
      .status(404)
      .json({ success: false, message: "No Women products found" });
  } catch (error) {
    console.error(`Error fetching Women products: ${error.message}`);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Women products" });
  }
};

const getBeautyProducts = async (req, res) => {
  try {
    const products = await ProductCollection.find({
      $or: [
        { category: { $regex: /beauty/i } }, // Matches 'men' in the category field
        { sub_category: { $regex: /beauty/i } }, // Matches 'men' in the sub_category field
      ],
    });

    if (products.length) {
      return res.status(200).json({
        success: true,
        count: products.length,
        data: products,
      });
    }

    res
      .status(404)
      .json({ success: false, message: "No Beauty products found" });
  } catch (error) {
    console.error(`Error fetching Beauty products: ${error.message}`);
    res
      .status(500)
      .json({ success: false, message: "Error fetching Beauty products" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductCollection.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error in fetching all products: ${error.message}`);
    res.status(500).json({ message: "Error in fetching products" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (mongoose.Types.ObjectId.isValid(id)) {
      const product = await ProductCollection.findById(id);
      if (product) {
        return res.status(200).json(product);
      }
    }
    res.status(404).json({ message: "Product not found" });
  } catch (error) {
    console.error(`Error in fetching product by ID: ${error.message}`);
    res.status(500).json({ message: "Error in fetching product" });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await ProductCollection.find({
      category: { $regex: new RegExp(category, "i") },
    });
    if (products.length) {
      return res.status(200).json(products);
    }
    res.status(404).json({ message: "No products found in this category" });
  } catch (error) {
    console.error(`Error in fetching products by category: ${error.message}`);
    res.status(500).json({ message: "Error in fetching products" });
  }
};

const getProductsBySubCategory = async (req, res) => {
  try {
    const { sub_category } = req.params;
    const products = await ProductCollection.find({
      sub_category: { $regex: new RegExp(sub_category, "i") },
    });
    if (products.length) {
      return res.status(200).json(products);
    }
    res.status(404).json({ message: "No products found in this sub-category" });
  } catch (error) {
    console.error(
      `Error in fetching products by sub-category: ${error.message}`
    );
    res.status(500).json({ message: "Error in fetching products" });
  }
};

const getProductsByName = async (req, res) => {
  try {
    const { name } = req.params;
    const products = await ProductCollection.find({
      name: { $regex: new RegExp(name, "i") },
    });
    if (products.length) {
      return res.status(200).json(products);
    }
    res.status(404).json({ message: "No products found with this name" });
  } catch (error) {
    console.error(`Error in fetching products by name: ${error.message}`);
    res.status(500).json({ message: "Error in fetching products" });
  }
};

const getRandomProducts = async (req, res) => {
  const size = parseInt(req.params.size) || 6; // Default size is 6
  try {
    const products = await ProductCollection.aggregate([{ $sample: { size } }]);
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error in fetching random products: ${error.message}`);
    res.status(500).json({ message: "Error in fetching products" });
  }
};
const getRandomProducts8 = async (req, res) => {
  try {
    const products = await ProductCollection.aggregate([
      { $sample: { size: 8 } },
    ]);
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error in fetching random products: ${error.message}`);
    res.status(500).json({ message: "Error in fetching products" });
  }
};

const getRandomProducts3 = async (req, res) => {
  try {
    const products = await ProductCollection.aggregate([
      { $sample: { size: 12 } },
    ]);
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error in fetching random products: ${error.message}`);
    res.status(500).json({ message: "Error in fetching products" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getProductsBySubCategory,
  getProductsByName,
  getRandomProducts,
  getRandomProducts3,
  getRandomProducts8,
  getMenProducts,
  getWomenProducts,
  getBeautyProducts,
  handleImageUpload,
  addProduct,
  editProduct,
  deleteProduct,
};

// const mongoose = require("mongoose");
// const ProductCollection = require("../models/ProductSchema");

// const productController = async (req, res) => {
//   try {
//     const { id, category, sub_category, name } = req.params;

//     let productdata;

//     if (req.path.includes("/random")) {
//       // Handle random products route
//       productdata = await ProductCollection.aggregate([
//         { $sample: { size: 6 } },
//       ]);
//     } else if (id && mongoose.Types.ObjectId.isValid(id)) {
//       productdata = await ProductCollection.findById(id);
//     } else if (category) {
//       const searchCategory = category.toLowerCase();
//       productdata = await ProductCollection.find({
//         category: { $regex: new RegExp(searchCategory, "i") },
//       });
//     } else if (sub_category) {
//       const searchSubCategory = sub_category.toLowerCase();
//       productdata = await ProductCollection.find({
//         sub_category: { $regex: new RegExp(searchSubCategory, "i") },
//       });
//     } else if (name) {
//       const searchname = name.toLowerCase();
//       productdata = await ProductCollection.find({
//         name: { $regex: new RegExp(searchname, "i") },
//       });
//     } else {
//       productdata = await ProductCollection.find();
//     }

//     if (!productdata || productdata.length === 0) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json(productdata);
//   } catch (error) {
//     console.log(`Error in fetching product: ${error.message}`);
//     res.status(500).json({ message: "Error in fetching product" });
//   }
// };

// module.exports = productController;

// //db.product.find({category:"food"})

// // db.product.aggregate({
// // $match:{categoy:"food"}
// // })

// //products.filter((product)=>{
// // return product.category=="food"
// // })
