
const express=require("express");
const cors=require("cors");
require("dotenv").config();
const mongoose=require("mongoose");
const adminRoute=require("./routes/adminRoutes");
const bodyparser=require("body-parser");
const app= express();
app.use(cors())


//Database connection
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("Database connected");
})

//body parser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.use("/admin",adminRoute);
const Port=process.env.PORT || 8000
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})