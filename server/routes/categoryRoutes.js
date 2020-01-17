import Router from 'express';

import asyncErrorHandler from '../helpers/asyncErrorHandler';
import categoryController from '../controllers/categoryController';
import isLogged from '../middlewares/isLogged';

const router = Router();

router.get('/categories', isLogged, asyncErrorHandler(categoryController.viewAll));

export default router;