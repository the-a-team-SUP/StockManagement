import moment from 'moment';
import con from '../config/dbConnect';
import categories from '../models/category';

class categoryController {
    static async create(req, res) {
        const {
            name,
        } = req.body;
        const createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
        const newCategory = await con.query(categories.insertCategory, [
            name,
            createdAt
        ]);
        if (newCategory.rowCount === 1) {
            return res.status(201).json({
                status: 201,
                message: 'Category successfully Created',
                data: newCategory.rows[0]
            });
        }
        return res.status(409).json({
            status: 409,
            error: 'Category not created'

        });
    }
}
export default categoryController;