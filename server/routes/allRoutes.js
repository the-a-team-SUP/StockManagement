import Router from "express";

import authRoutes from "./authRoutes";
import employeeRoutes from "./employeeRoutes";
import productRoutes from "./productRoutes";
import categoryRoutes from "./categoryRoutes";

const router = Router();

router.use(authRoutes);
router.use(employeeRoutes);
router.use(productRoutes);
router.use(categoryRoutes);

export default router;
