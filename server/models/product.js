const mongoose=require("mongoose")

let productSchema=new mongoose.Schema({
    productname:String,
    category:String,
    brand:String,
    price:Number,
    salePrice:Number,
    description:String
})

module.exports=mongoose.model("Product",productSchema)