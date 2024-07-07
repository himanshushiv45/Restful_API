import express from "express";
import {getAllProducts, getAllProductsTesting} from "../controllers/products.js";
const router = express.Router();


// first 
router.route("/").get(getAllProducts);


// second
router.route("/testing").get(getAllProductsTesting);








export default router;
