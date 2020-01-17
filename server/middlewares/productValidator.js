import Joi from "@hapi/joi";

const addProduct = (req, res, next) => {
  const fields = Joi.object({
    name: Joi.string()
      .strict()
      .trim()
      .required(),
    quantity: Joi.string()
      .strict()
      .trim()
      .required(),
    description: Joi.string()
      .strict()
      .trim()
      .required()
      .email()
  });
  const output = fields.validate(req.body);
  if (output.error != null) {
    return res.status(400).json({
      status: 400,
      error: `${output.error.details[0].message}`
    });
  }
  next();
};

export default addProduct;
