const Product=require("../models/product")


const gettAllProducts = async (req, res) => {  // Add 'req' and 'res' as parameters
  const myData=await Product.find(req.query);
    res.status(200).json({ myData });
  };
  
  const gettAllProductsTesting = async (req, res) => {  // Add 'req' and 'res' as parameters
    res.status(200).json({ msg: "I'm getting all products testing" });
  };
  
  module.exports = { gettAllProducts, gettAllProductsTesting };