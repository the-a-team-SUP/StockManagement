import User from '../models/userModel';
import Auth from '../helpers/authenticate';

class UserController {
    static async signIn(req, res) {
        const doesExist = await User.emailExists(req.body.email);
        if (doesExist.rowCount === 0) {
            return res.status(401).json({
                status: 401,
                error: 'Sign up first please',
            });
        }
        const pswMatch = Auth.checkPassword(req.body.password, doesExist.rows[0].password);
        if (pswMatch) {
            const {
                id,
                names,
                email,
                role
            } = doesExist.rows[0];

            return res.status(200).json({
                status: 200,
                message: 'User is successfully logged in',
                data: {
                    token: Auth.generateToken(
                        email,
                        id,
                        role),
                    names,
                    email,
                    role
                }
            });
        }

        return res.status(401).json({
            status: 401,
            error: 'Invalid credentials',
        });
    }
};

export default UserController;