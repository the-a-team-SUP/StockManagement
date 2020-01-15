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
            message: 'The employee was added successfully',
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
};

export default EmployeeController;