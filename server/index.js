import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import allRoutes from './routes/allRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});


app.use('/api/v1', allRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Stock Management App' });
});

app.use((req, res) => {
    res.status(404);
    res.json({
        status: 404,
        error: 'Endpoint not found'
    });
});

app.listen(port, () => {
    process.stdout.write(`Stock Management App running on ${port}\n`);
});

export default app;