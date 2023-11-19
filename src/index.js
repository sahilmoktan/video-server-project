// require ('dotenv').config({path: './env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./contants.js";
import connectDB from "./db/config.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    try {
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("Server Not running:", error);
      throw err;
    }
  })
  .catch((err) => {
    console.log("MONGO db connection failed!!!");
  });

/*

// approch 1: that connect mongose form index only
import express  from "express";
const app = express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error)=>{
            console.log('ERRR:', error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error('Error:',error)
        throw err
    }
})() */
