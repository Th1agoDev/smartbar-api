import {Router, Request, Response} from 'express';
import 'express-async-errors';

const router = Router();

router.get('/test',(req: Request, res: Response) => {
    return res.json({nome: 'smartbar'})
})

export {router};