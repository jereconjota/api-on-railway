
import { Router } from 'express';
import { ping } from '../constrollers/index.controller.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('API is running... /ping to test db connection, api/employees to get all employees');
});


//test db connection
router.get('/ping', ping );

export default router;