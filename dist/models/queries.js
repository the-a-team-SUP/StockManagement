"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var createUsersTable = "\n    CREATE TABLE IF NOT EXISTS\n        users (\n            id  SERIAL PRIMARY KEY,\n            names VARCHAR(255) NOT NULL,\n            email VARCHAR(255) UNIQUE NOT NULL,\n            status VARCHAR(50) NOT NULL,\n            role VARCHAR(50) NOT NULL,\n            password VARCHAR(255) NOT NULL,\n            createdOn timestamp without time zone\n)";
var deleteAllTables = "\n    DROP TABLE IF EXISTS\n        users";
var addUser = "\n    INSERT INTO\n        users (names, email, status, role, password, createdOn)\n    VALUES ($1, $2, $3, $4, $5, $6)\n    RETURNING *";
var findOneUser = "select * from users where email= $1";
var findUserById = "select * from users where id= $1";
var findAllEmployees = 'SELECT * FROM  users';
var updatePassword = "UPDATE users SET password=$1 WHERE id=$2 RETURNING *";
var createProductTable = "CREATE TABLE IF NOT EXISTS\n            products (\n                id SERIAL PRIMARY KEY,\n                employee_id VARCHAR(255) NOT NULL,\n                category_id VARCHAR(255) NOT NULL,\n                name VARCHAR(255) NOT NULL,\n                quantity VARCHAR(255) NOT NULL,\n                description VARCHAR(255) NOT NULL,\n                createdAt timestamp without time zone\n            )\n";
var addProduct = "\n    INSERT INTO \n        products (employee_id, category_id, name, quantity, description, createdAt)\n    VALUES ($1, $2, $3, $4, $5, $6)\n    RETURNING *";
var findProductById = "select * from products where id= $1";
var allProducts = "select * from products";
var _default = {
  createUsersTable: createUsersTable,
  deleteAllTables: deleteAllTables,
  addUser: addUser,
  findOneUser: findOneUser,
  findUserById: findUserById,
  findAllEmployees: findAllEmployees,
  updatePassword: updatePassword,
  createProductTable: createProductTable,
  addProduct: addProduct,
  findProductById: findProductById,
  allProducts: allProducts
};
exports["default"] = _default;