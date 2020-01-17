import Product from "../models/productModel";

class ProductControler {
  static async createProduct(req, res) {
    req.body.employee_id = req.userData.id;
    const p = new Product(req.body);
    console.log(p);
    const addedProduct = await Product.addProduct(p);
    if (addedProduct) {
      return res
        .json({
          status: 201,
          message: "Product Created Successffully",
          data: addedProduct
        })
        .status(201);
    }
    return res.status(500).json({
      status: 500,
      message: "failed to save product"
    });
  }
}

export default ProductControler;
