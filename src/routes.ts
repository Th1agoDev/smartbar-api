import {Router} from 'express';

import { CreateUserController} from './controllers/user/CreateUserControllers'
import { AuthUserController } from './controllers/user/AuthUserController';
import { ExhibitionuserController } from './controllers/user/ExhibitionUserController';
import { authentificated } from './middlewares/authenticated'

const router = Router();

//User Rotas
router.post('/users', new CreateUserController().handle)

router.post ('/session', new AuthUserController().handle)

router.get('/info', authentificated, new ExhibitionuserController().handle )

export {router};