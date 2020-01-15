import Auth from '../helpers/authenticate';

export default async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = Auth.verifyToken(token);
        req.userData = decoded;
        if (decoded.role !== 'Admin') {
            return res.status(403).send({
                status: 403,
                error: 'You have no access this endpoint',
            });
        }
        return next();
    } catch (error) {
        console.log(error.message);
        return res.status(401).json({
            status: 401,
            error: 'Auth failed',
        });
    }
};