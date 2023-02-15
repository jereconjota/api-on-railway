import { Router } from 'express';
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../constrollers/employees.controller.js';
const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.delete('/employees/:id', deleteEmployee);

router.post('/employees', createEmployee);

router.patch('/employees/:id', updateEmployee); // update partial data, put update all data

export default router;

