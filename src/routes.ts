import {Router} from 'express';

import { CreateUserController} from './controllers/user/CreateUserControllers'
import { AuthUserController } from './controllers/user/AuthUserController';
import { ExhibitionuserController } from './controllers/user/ExhibitionUserController';
import {CreateCategoryController} from './controllers/category/CreateCategoryController'

import { authentificated } from './middlewares/authenticated'

const router = Router();

// Rotas do usuario 
router.post('/users', new CreateUserController().handle)

router.post ('/session', new AuthUserController().handle)

router.get('/info', authentificated, new ExhibitionuserController().handle )

//  Rotas da categoria 
router.post('/category', authentificated, new CreateCategoryController().handle)

export {router};