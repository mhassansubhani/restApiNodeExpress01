const express=require('express');

const router=express.Router();


const {gettAllProducts,gettAllProductsTesting}=require("../controllers/products")

router.route("/").get(gettAllProducts);
router.route("/testing").get(gettAllProductsTesting);
module.exports=router;
