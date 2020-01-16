import Auth from '../helpers/authenticate';
import pool from '../config/dbConnect';
import queries from './queries';

class User {
    constructor({ names, email, status, password, role }) {
        this.names = names;
        this.email = email;
        this.status = status;
        this.role = role;
        this.password = Auth.hashPassword(password);
        this.createdOn = new Date();
    }

    static emailExists(email) {
        return pool.query(queries.findOneUser, [email]);
    }

    static idExists(id) {
        return pool.query(queries.findUserById, [id]);
    }

    static async createUser(user) {
        const addedUser = await pool.query(queries.addUser, [
            user.names,
            user.email,
            user.status,
            user.role,
            user.password,
            user.createdOn
        ]);
        return addedUser.rows[0];
    }

    static async updatePassword(id, password) {
        const updatedUser = await pool.query(queries.updatePassword, [password, id]);
        return updatedUser.rows[0];
    }

    static async allEmployees() {
        const { rows } = await pool.query(queries.findAllEmployees);
        return rows;
    }
}

export default User;