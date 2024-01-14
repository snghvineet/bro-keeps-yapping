import express, { Application } from 'express';
import { authRouter } from './routes/auth.route';

const app: Application = express();

app.use(express.json());
app.use('/auth', authRouter);

export { app };
