import Product from "../models/productModel";
import product from "../models/productModel";

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
  };

  static async retrieveProducts(req,res){
     const products = await product.allProducts();
     return res.status(200).json({
      status: 200,
      data: products
  });
  };

  static async retrieveOneProduct(req,res){
    const getOne = await product.oneProduct(req.params.id);
    return res.status(200).json({
      status: 200,
      data: getOne
  });
  }
}

export default ProductControler;
