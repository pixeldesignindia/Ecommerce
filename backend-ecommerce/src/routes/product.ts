import express from "express";
const app = express.Router();
import {adminOnly} from "../middlewares/auth.js"
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getSingleProduct,
  getlatestProducts,
  newProduct,
  updateProduct,
} from "../controllers/products.js";
import { singleUpload } from "../middlewares/multer.js";
import { validatation } from "../middlewares/schema-validator.js";
import { productSchema } from "../validation/product-validation.js";


//To Create New Product  - /api/v1/product/new
app.post("/new",  singleUpload,validatation(productSchema), newProduct);

//To get all Products with filters  - /api/v1/product/all
app.get("/all", getAllProducts);

//To get last 10 Products  - /api/v1/product/latest
app.get("/latest", getlatestProducts);

//To get all unique Categories  - /api/v1/product/categories
app.get("/categories", getAllCategories);


//To get all Products   - /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);

// To get, update, delete Product
app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload,validatation(productSchema), updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;