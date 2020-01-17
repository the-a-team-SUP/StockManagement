import Router from "express";

import ProductController from "../controllers/productController";
// import AuthValidator from '../middlewares/authValidator';
import isLogged from "../middlewares/isLogged";

const router = Router();

router.post("/products", isLogged, ProductController.createProduct);

export default router;
