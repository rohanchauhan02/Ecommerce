const express=require('express');
const errorMiddlelware =require("./middleware/error")
const app=express();

app.use(express.json());

//Route Imports
const product=require("./routes/productRoute");

app.use("/api/v1",product);


//Middeleware for Errors

app.use(errorMiddlelware );


module.exports=app;