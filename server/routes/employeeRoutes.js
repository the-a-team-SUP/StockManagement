import Router from 'express';

import EmployeeController from '../controllers/employeeController';
import AuthValidator from '../middlewares/authValidator';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import isLogged from '../middlewares/isLogged';
import isAdmin from '../middlewares/isAdmin';
import retrieve from '../models/retrieveEmployees';

const router = Router();

router.post('/employee', isLogged, isAdmin, AuthValidator.addEmployeeValidator, asyncErrorHandler(EmployeeController.addEmployee));
router.get('/retrieve/employees', isLogged, isAdmin, retrieve);
export default router;