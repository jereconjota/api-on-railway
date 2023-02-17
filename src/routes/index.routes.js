
import { Router } from 'express';
import { ping } from '../constrollers/index.controller.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('API is working');
});


//test db connection
router.get('/ping', ping );

export default router;