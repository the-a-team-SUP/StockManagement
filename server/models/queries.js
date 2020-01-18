const createUsersTable = `
    CREATE TABLE IF NOT EXISTS
        users (
            id  SERIAL PRIMARY KEY,
            names VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            status VARCHAR(50) NOT NULL,
            role VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            createdOn timestamp without time zone
)`;

const deleteAllTables = `
    DROP TABLE IF EXISTS
        users`;

const addUser = `
    INSERT INTO
        users (names, email, status, role, password, createdOn)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`;

const findOneUser = `select * from users where email= $1`;

const findUserById = `select * from users where id= $1`;

const findAllEmployees = 'SELECT * FROM  users';

const updatePassword = `UPDATE users SET password=$1 WHERE id=$2 RETURNING *`;
const createProductTable = `CREATE TABLE IF NOT EXISTS
            products (
                id SERIAL PRIMARY KEY,
                employee_id VARCHAR(255) NOT NULL,
                category_id VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                quantity VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                createdAt timestamp without time zone
            )
`;

const addProduct = `
    INSERT INTO 
        products (employee_id, category_id, name, quantity, description, createdAt)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`;

const findProductById = `select * from products where id= $1`;

const findAllProducts = `select * from products`;

const allProducts = `select * from products`;

export default {
    createUsersTable,
    deleteAllTables,
    addUser,
    findOneUser,
    findUserById,
    findAllEmployees,
    updatePassword,
    createProductTable,
    addProduct,
    findProductById,
    findAllProducts,
    allProducts
};