const Product = require("../models/product");

let addProduct = async (req, res) => {
  try {
    const { productname, category, brand, price, salePrice, description } =
      req.body;

    const newProduct = new Product({
        productname, category, brand, price, salePrice, description
    });

    await newProduct.save();
    res.status(200).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { addProduct };
