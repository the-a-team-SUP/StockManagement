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
var _default = {
  createUsersTable: createUsersTable,
  deleteAllTables: deleteAllTables,
  addUser: addUser,
  findOneUser: findOneUser,
  findUserById: findUserById
};
exports["default"] = _default;