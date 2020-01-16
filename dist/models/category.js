"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var createCategory = "CREATE TABLE IF NOT EXISTS categories (\n    id SERIAL PRIMARY KEY,\n    name text,\n    createdAt text\n)";
var insertCategory = "INSERT INTO categories (\n   name,\n   createdAt\n  ) VALUES ($1,$2) ON CONFLICT DO NOTHING returning *";
var _default = {
  createCategory: createCategory,
  insertCategory: insertCategory
};
exports["default"] = _default;