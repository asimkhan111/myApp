import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import appRoute from "./route/app.route.js";
import userRoute from "./route/user.route.js"
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());


dotenv.config();
const PORT = process.env.PORT || 3001;
const URI =process.env.MongoDBURI;

//connect to mongodb
try {
  mongoose.connect(URI,{
   

  });
  console.log("Database Connected!!")
} catch (error) {
  console.log("Error :", error)
}

// Defining routes
app.use("/app", appRoute)
app.use("/user", userRoute)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})