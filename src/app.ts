import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import carRouter from './routes/car.routes';
import motorcycleRouter from './routes/motorcycle.routes';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(motorcycleRouter);
app.use(errorHandler);

export default app;
