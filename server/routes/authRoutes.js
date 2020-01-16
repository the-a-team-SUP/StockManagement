import Router from 'express';

import UserController from '../controllers/userController';
import categoryController from '../controllers/categoryController';
import AuthValidator from '../middlewares/authValidator';
import categoryValidation from '../middlewares/categoryValidator';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import isLogged from '../middlewares/isLogged';
import isAdmin from '../middlewares/isAdmin';

const router = Router();

<<<<<<< HEAD
router.post('/auth/login', AuthValidator.signinValidator, asyncErrorHandler(UserController.signIn));
=======
router.post('/signin', AuthValidator.signinValidator, asyncErrorHandler(UserController.signIn));
router.post('/categories', isLogged, isAdmin, categoryValidation.createCategory, asyncErrorHandler(categoryController.create));
>>>>>>> ft(backend): admin can add a category [Finishes #170754457]

export default router;