import pool from '../config/dbConnect';
import queries from "./queries";
import Auth from '../helpers/authenticate';

const dummyUsers = [{
    names: 'Josue Byiringiro',
    email: 'josue@gmail.com',
    status: 'Active',
    role: 'Admin',
    password: Auth.hashPassword('12345678'),
    createdOn: new Date()
}, {
    names: 'Karen Giramata',
    email: 'karen@gmail.com',
    status: 'Active',
    role: 'Employee',
    password: Auth.hashPassword('12345678'),
    createdOn: new Date()
}];

const addTables = async() => {
    await pool.query(queries.addUser, [
        dummyUsers[0].names,
        dummyUsers[0].email,
        dummyUsers[0].status,
        dummyUsers[0].role,
        dummyUsers[0].password,
        dummyUsers[0].createdOn
    ]);
    await pool.query(queries.addUser, [
        dummyUsers[1].names,
        dummyUsers[1].email,
        dummyUsers[1].status,
        dummyUsers[1].role,
        dummyUsers[1].password,
        dummyUsers[1].createdOn
    ]);
    process.stdout.write(
        "Two users added successfully\n"
    );
};

(async() => {
    await pool.query(addTables);
})().catch(error => process.stdout.write(`${error}\n`));

export default addTables;