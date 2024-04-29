import express from 'express';
import todosRouter from './routes/todos';
import { app } from './config/app';
import {connectDB} from './config/db';

connectDB();

app.use('/todos', todosRouter);

const PORT = 5000;

app.listen(PORT , () => {
 console.log(`Server running on port ${PORT}`);
});
