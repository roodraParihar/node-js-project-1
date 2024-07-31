// imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors"
import connectDB from "./config/db.js";

// dot env config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();



// routes
app.get("/",(req,res)=>{
    res.send("<h1>welcome to the my job portal</h1>");
})

// port 
const PORT = process.env.PORT || 8080;

// listen 
app.listen(PORT,() =>{
    console.log(`node server is running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgYellow.bgWhite)
})


