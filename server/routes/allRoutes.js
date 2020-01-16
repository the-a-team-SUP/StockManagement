import Router from 'express';

import authRoutes from './authRoutes';
import employeeRoutes from './employeeRoutes';

const router = Router();

router.use(authRoutes);
router.use(employeeRoutes);

export default router;