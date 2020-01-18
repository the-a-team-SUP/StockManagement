import Router from "express";
import asyncErrorHandler from '../helpers/asyncErrorHandler';

import ProductController from "../controllers/productController";
// import AuthValidator from '../middlewares/authValidator';
import isLogged from "../middlewares/isLogged";

const router = Router();

router.post("/products", isLogged, ProductController.createProduct);
router.get("/products", isLogged,asyncErrorHandler(ProductController.retrieveProducts));
router.get("/products/:id",isLogged,asyncErrorHandler(ProductController.retrieveOneProduct ));

export default router;
