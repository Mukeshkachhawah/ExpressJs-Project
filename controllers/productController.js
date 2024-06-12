// const productdata = require("../util/productjsondata.json");
const productCollection = require("../models/ProductSchema");
const productcontroller = async (req, res) => {
  try {
    const productData = await productCollection.find({
      category: " Health ",
    });
    res.status(200).json(productData);
  } catch (error) {
    console.log(`Error in fetching`.bgRed.white);
  }
};
module.exports = productcontroller;

//filter in mongodb
//I method : db.product.find({category : "Food"})
//II method db.product.aggregate({
//     $match"{category: "Food"}
// })

//III method : filter in javascript
// product.filter((product)=>{
//     return productcontroller.category=="Food";
// })
