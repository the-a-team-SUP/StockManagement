import Router from "express";

import authRoutes from "./authRoutes";
import employeeRoutes from "./employeeRoutes";
import productRoutes from "./productRoutes";

const router = Router();

router.use(authRoutes);
router.use(employeeRoutes);
router.use(productRoutes);

export default router;
