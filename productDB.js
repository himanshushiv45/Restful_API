 
import connectDB from "./db/connectDB.js";
import productModel from "./models/productModel.js";
import ProductJson from "./product.json" with {type:"json"};


const uri = "mongodb://127.0.0.1:27017/restful-DB";


const start = async () => {
  try {
    await connectDB(uri);

    await productModel.create(ProductJson);

    console.log("success🎉");


  } catch (error) {
    console.log(error);
  }
};
start();
