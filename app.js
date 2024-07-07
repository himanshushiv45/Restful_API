import express from "express";
import product_routes from "./routes/products.js";
import connectDB from "./db/connectDB.js";

const PORT = process.env.PORT || 5000;
const app = express();

const uri = "mongodb://127.0.0.1:27017/restful-DB";



// Middleware or set router
app.use("/api/products", product_routes);

// Server
const start = async () => {
  try {
    // Connect DB
    await connectDB(uri);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
