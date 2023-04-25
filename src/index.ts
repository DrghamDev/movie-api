import express from 'express';
import mainRouter from './routers/router';
import connectToDatabase from './config/database-connection';

const app = express();

// Set up main middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// Set up router
app.use('/', mainRouter);

// Connect to the database
connectToDatabase();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})