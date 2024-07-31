// imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";

// dot env config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());   // json support
app.use(cors());            // different port interactions
app.use(morgan("dev"));     // shows in the terminal time taken while running the api


// routes
app.use("/api/v1/test",testRoutes);



// port 
const PORT = process.env.PORT || 8080;

// listen 
app.listen(PORT,() =>{
    console.log(`node server is running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgYellow.bgWhite)
})


