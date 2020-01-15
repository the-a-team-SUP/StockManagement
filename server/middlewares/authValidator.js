import Joi from '@hapi/joi';
import User from '../models/userModel';

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
            error: message
        });
    }

    static addEmployeeValidator(req, res, next) {
        const Schema = Joi.object().keys({
            createdOn: Joi.date().required(),
            names: Joi.string().min(3).max(40).label('Names').trim().required(),
            email: Joi.string().email().label('Email').trim().required(),
            status: Joi.string().min(3).max(40).label('Status').trim().required(),
            role: Joi.string().min(3).max(40).label('Role').trim().required(),
            password: Joi.string().label('Password').trim().required(),
        });

        const user = new User(req.body);
        const result = Schema.validate(user, {
            abortEarly: false
        });
        const valid = result.error == null;

        if (valid) {
            return next();
        }
        const { details } = result.error;
        const message = details.map(i => i.message.replace(/"/g, '')).join(', ');

        return res.status(400).json({
            status: 400,
            error: message,
        });
    }
}

export default AuthValidation;