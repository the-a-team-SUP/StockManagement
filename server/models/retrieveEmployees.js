import pool from '../config/dbConnect';

 
     const adminRetrieve = async(req, res)=> {
    const findAllEmployees = 'SELECT * FROM  users';
    
    try {
        
        const {rows}  = await pool.query(findAllEmployees);
        return res.status(200).json( {rows} );
        
      } catch (error) {
        return res.status(400).json(error.message);
      }
    }
    


    export default adminRetrieve;