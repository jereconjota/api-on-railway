import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        console.log('getting employees');
        const [rows] = await pool.query('SELECT * FROM employee');
        res.json(rows);
        console.log(new Date(Date.now()).toISOString(), 'employees sent');
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

export const getEmployee = async (req, res) => {
    try {
        console.log('getting employee');
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
        if (rows.length === 0) {
            console.log(new Date(Date.now()).toISOString(), 'employee not found');
            return res.status(404).send({
                message: 'Employee not found'
            });
        }
        res.json(rows[0]);
        console.log(new Date(Date.now()).toISOString(), 'employee sent');
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong'
        });

    }
}

export const createEmployee = async (req, res) => {
    try {
        console.log('creating employee');
        const { name, salary } = req.body;
        //TODO validate data
        const [rows] = await pool.query('INSERT INTO employee  (name, salary) VALUES (?,?)', [name, salary]);
        res.send({
            message: 'Employee created successfully',
            newEmployee: {
                name,
                salary,
                id: rows.insertId
            }
        });
        console.log(new Date(Date.now()).toISOString(), 'employee created');
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

export const updateEmployee = async (req, res) => {
    try {
        console.log('updating employee');
        const { id } = req.params;
        const { name, salary } = req.body;
        //TODO validate data
        const [rows] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
        if (rows.affectedRows === 0) {
            console.log(new Date(Date.now()).toISOString(), 'employee not found');
            return res.status(404).send({
                message: 'Employee not found'
            });
        }

        const [updatedEmployee] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
        res.send({
            message: 'Employee updated successfully',
            updatedEmployee: updatedEmployee[0]
        });

        console.log(new Date(Date.now()).toISOString(), `employee id:${id} updated`);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        console.log('deleting employee');
        const { id } = req.params;
        const [rows] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);
        if (rows.affectedRows === 0) {
            console.log(new Date(Date.now()).toISOString(), 'employee not found');
            return res.status(404).send({
                message: 'Employee not found'
            });
        }
        res.send({
            message: 'Employee deleted successfully'
        });
        console.log('employee deleted');
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}