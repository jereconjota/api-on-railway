import { pool } from '../db.js';

export const ping = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT "pong" AS solution');
        res.send(result[0].solution);
    } catch (err) {
        console.log(err);
        res.send('Error: ' + err);
    }
}