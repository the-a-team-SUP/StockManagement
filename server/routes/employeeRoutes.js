import Router from 'express';

import EmployeeController from '../controllers/employeeController';
import AuthValidator from '../middlewares/authValidator';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import isLogged from '../middlewares/isLogged';
import isAdmin from '../middlewares/isAdmin';

const router = Router();

router.post('/employees', isLogged, isAdmin, AuthValidator.addEmployeeValidator, asyncErrorHandler(EmployeeController.addEmployee));

router.get('/employees', isLogged, isAdmin, asyncErrorHandler(EmployeeController.retrieveEmployees));

router.patch('/employees/:employee_id/password', isLogged, AuthValidator.EmployeePasswordValidator, asyncErrorHandler(EmployeeController.updatePassword));

export default router;