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

    static async updatePassword(req, res){
        const newPassword = req.body.password;
        if(req.userData.id == req.params.employee_id){
            const newPassword = new User(req.body);
            const {names, username} = await User.updatePassword(req.userData.id, newPassword.password);
            res.send(`password successfuly updated for user ${names} with username ${username}`);
        } else {
            res.status(401).json({
                status: 401,
                error: "Unauthorized. \nUnable to update password"
            });
        }
    }

};

export default EmployeeController;