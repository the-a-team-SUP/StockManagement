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

    static async viewAll(req, res){
        const allCategories = await con.query(categories.getAllCategories);
        console.log(allCategories.rows.length);
        if(allCategories.rows.length > 0){
            return res.status(200).json({
                status:200,
                data: allCategories.rows
            });
        }
        return res.status(404).json({
            status:404,
            error: "no categories were found"
        });
    }

}
export default categoryController;