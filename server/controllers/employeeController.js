import User from '../models/userModel';
import Auth from '../helpers/authenticate';

class EmployeeController {
    static async addEmployee(req, res) {
        const existingEmail = await User.emailExists(req.body.email);
        if (existingEmail.rowCount === 1) {
            return res.status(409).json({
                status: 409,
                error: 'This employee already exists!'
            });
        }

        const user = new User(req.body);

        const {
            id,
            names,
            email,
            role
        } = await User.createUser(user);

        return res.status(201).json({
            status: 201,
            message: 'Employee created successfully',
            data: {
                token: Auth.generateToken(
                    email,
                    id,
                    role
                ),
                names,
                email,
                role
            }
        });
    }

    static async updatePassword(req, res) {
        const newPassword = Auth.hashPassword(req.body.password);
        if (req.userData.id === parseInt(req.params.employee_id, 10)) {
            const { names, email, role } = await User.updatePassword(req.userData.id, newPassword);
            res.status(200).json({
                status: 200,
                message: 'Employee password updated successfully',
                data: {
                    names,
                    email,
                    role
                }
            });
        } else {
            res.status(401).json({
                status: 401,
                error: "Unauthorized. \nUnable to update password"
            });
        }
    }

    static async retrieveEmployees(req, res) {
        const employees = await User.allEmployees();
        return res.status(200).json({
            status: 200,
            data: employees
        });
    }

};

export default EmployeeController;