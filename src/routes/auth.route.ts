import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

export const authRouter = Router();

type AuthRequestBody = {
    email: string;
    username: string;
    password: string;
};

authRouter.post('/signup', (req: Request, res: Response) => {
    console.log(req.body);
    res.sendStatus(StatusCodes.ACCEPTED);
});
