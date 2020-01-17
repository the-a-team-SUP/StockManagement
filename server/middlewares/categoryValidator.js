import Joi from '@hapi/joi';


const createCategory = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .trim()
            .required()
    });
    const output = schema.validate(req.body);
    if (output.error != null) {
        return res.status(400).json({
            status: 400,
            error: `${output.error.details[0].message}`
        });
    }
    next();
};
export default {
    createCategory
};