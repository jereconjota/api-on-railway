
import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

//test on db
router.get('/ping', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT "pong" AS solution');
        res.send(result[0].solution);
    } catch (err) {
        console.log(err);
        res.send('Error: ' + err);
    }
});

export default router;