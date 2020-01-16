import Router from 'express';

import EmployeeController from '../controllers/employeeController';
import AuthValidator from '../middlewares/authValidator';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import isLogged from '../middlewares/isLogged';
import isAdmin from '../middlewares/isAdmin';

const router = Router();

router.post('/employee', isLogged, isAdmin, AuthValidator.addEmployeeValidator, asyncErrorHandler(EmployeeController.addEmployee));
router.patch('/employee/:employee_id/password', isLogged, AuthValidator.EmployeePasswordValidator, asyncErrorHandler(EmployeeController.updatePassword));

export default router;