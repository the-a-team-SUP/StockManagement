import pool from "../config/dbConnect";
import queries from "./queries";

class product {
  constructor({ employee_id, category_id, name, quantity, description }) {
    this.employee_id = employee_id;
    this.category_id = category_id;
    this.name = name;
    this.quantity = quantity;
    this.description = description;
    this.createdAt = new Date();
  }

  static async addProduct(pdt) {
    const addedProduct = await pool.query(queries.addProduct, [
      pdt.employee_id,
      pdt.category_id,
      pdt.name,
      pdt.quantity,
      pdt.description,
      pdt.createdAt
    ]);
    return addedProduct.rows[0];
  }
}

export default product;
