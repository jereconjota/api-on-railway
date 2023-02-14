import express from 'express';
import { pool } from './db.js';

const app = express();


app.get('/employees', (req, res) => {
    res.send(' geting all employees');
});

app.post('/employees', (req, res) => {
    res.send('creating new employee');
});

app.delete('/employees', (req, res) => {
    res.send('deleting all employees');
});


app.get('/employees/:id', (req, res) => {
    res.send('geting employee with id: ' + req.params.id);
});

app.put('/employees/:id', (req, res) => {
    res.send('updating employee with id: ' + req.params.id);
});

app.delete('/employees/:id', (req, res) => {
    res.send('deleting employee with id: ' + req.params.id);
});




//test on db
app.get('/ping', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT "pong" AS solution');
        res.send(result[0].solution);
    } catch (err) {
        console.log(err);
        res.send('Error: ' + err);
    }
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
