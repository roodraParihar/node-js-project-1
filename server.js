// imports
const express = require("express");

// rest object
const app = express();

// routes
app.get("/",(req,res)=>{
    res.send("<h1>welcome to the my job portal</h1>");
})

// listen 
app.listen(8080,() =>{
    console.log('node server is running')
})


