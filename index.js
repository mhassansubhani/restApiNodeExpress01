const express=require('express');
const app=express();
const connectDb=require("./db/connect");
require("dotenv").config();
const PORT=process.env.PORT || 5000;


const products_routes=require("./routes/products")

// app.get('/',(req,res)=>{
//  res.send("hello world");
// });




app.use("/api/products",products_routes);


const start=async()=>{
    try{
        await connectDb(process.env.MONGODB_URL); // calls function in connect.js
        console.log("Connected to database");
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    }catch(error)
    {
        console.log(error);
    }
}

start();
