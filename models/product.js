const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true},
        price: {
            type:Number,
            required:[true,"price must be provided "]
        },
      rating:{
        type:Number,
        default:4.9,
      },
      createdAt:{
        type:Date,
        default:Date.now(),
      },
      company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:"Please enter a valid company",
        }
      }
    })

    module.exports=mongoose.model('product',productSchema);