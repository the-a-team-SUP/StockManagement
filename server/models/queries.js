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

const updatePassword = `UPDATE users SET password=$1 WHERE id=$2 RETURNING *`


export default {
    createUsersTable,
    deleteAllTables,
    addUser,
    findOneUser,
    findUserById,
    updatePassword
};