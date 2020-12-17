import { Router } from 'express';

import { createUser, updateUser, countUsers } from './controllers/UserController';
import { createHemocenter, listHemocenters, getHemocenter } from './controllers/HemocenterController';
import { userSession } from './controllers/SessionController';
import { createInfo, listDetails, listAll, listOne, deleteMyInfo } from './controllers/InfoController';

import authMiddleware from './middlewares/auth';

const router = new Router();

router.post('/users', createUser);
router.post('/sessions', userSession);
router.post('/hemocenters', createHemocenter);
router.get('/hemocenters', listHemocenters);
router.get('/hemocenters/:id', getHemocenter);
router.get('/cases', listAll);
router.get('/cases/:id', listDetails);
router.get('/count', countUsers);

router.use(authMiddleware);

router.get('/myinfo', listOne);
router.delete('/myinfo/:id', deleteMyInfo);
router.put('/users', updateUser);
router.post('/info', createInfo);

export default router;

