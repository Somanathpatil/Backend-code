// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB() 















// import express from "express";
// const app = express();

// (async () => {
//   try {
//     if (!process.env.MONGODB_URI || !process.env.PORT) {
//       throw new Error("Missing required environment variables (MONGODB_URI or PORT)");
//     }

//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("Connected to MongoDB");

//     app.on("error", (error) => {
//       console.error("App encountered an error:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.error("Startup error:", error);
//     process.exit(1); 
//   }
// })();
