import {Router} from 'express';

import { CreateUserController} from './controllers/user/CreateUserControllers'


const router = Router();

//User Rotas
router.post('/users', new CreateUserController().handle)


export {router};