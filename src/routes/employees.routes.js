import { Router } from 'express';

const router = Router();

router.get('/employees', (req, res) => {
    res.send(' geting all employees');
});

router.post('/employees', (req, res) => {
    res.send('creating new employee');
});

router.put('/employees', (req, res) => {
    res.send('updating all employees');
});

router.delete('/employees', (req, res) => {
    res.send('deleting all employees');
});


export default router;