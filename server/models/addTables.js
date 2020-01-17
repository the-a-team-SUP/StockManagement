import pool from "../config/dbConnect";
import queries from "./queries";

const addTables = async () => {
  await pool.query(queries.createUsersTable);
  await pool.query(queries.createProductTable);
  process.stdout.write("Users and products tables created successfully\n");
};

(async () => {
  await pool.query(addTables);
})().catch(error => process.stdout.write(`${error}\n`));

export default addTables;
