import pool from '../config/dbConnect';
import category from "./category";

const addCategories = async () => {
    await pool.query(category.createCategory);
    process.stdout.write(
        "Categories created successfully\n"
    );
};

(async () => {
    await pool.query(addCategories);
})().catch(error => process.stdout.write(`${error}\n`));

export default addCategories;