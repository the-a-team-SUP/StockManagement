import Joi from '@hapi/joi';

class AuthValidation {
    static signinValidator(req, res, next) {
        const Schema = Joi.object().keys({
            email: Joi.string().email().label('Email').trim().required(),
            password: Joi.string().min(5).regex(/^[a-zA-Z0-9]{3,30}$/).label('Password').trim().required(),
        });

        const userChecker = {
            email: req.body.email,
            password: req.body.password,
        };
        const result = Schema.validate(userChecker, {
            abortEarly: false
        });

        const valid = result.error == null;

        if (valid) {
            return next();
        }

        const { details } = result.error;
        const message = details.map(i => i.message.replace(/"/g, '')).join(',');

        return res.status(400).json({
            status: 400,
            error: message,
        });
    }
}

export default AuthValidation;