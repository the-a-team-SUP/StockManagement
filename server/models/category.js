const createCategory = `CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name text,
    createdAt text
)`;
const insertCategory = `INSERT INTO categories (
   name,
   createdAt
  ) VALUES ($1,$2) ON CONFLICT DO NOTHING returning *`;

const getAllCategories = `SELECT * FROM categories`

export default {
    createCategory,
    insertCategory,
    getAllCategories
};