import { Router } from 'express';
import * as UserController from './controllers/User';

const routes = Router();

routes.get('/', UserController.getUsers);
routes.get('/users', UserController.getUsers);

routes.get('/user/:id', UserController.getUser);
routes.post('/user', UserController.postUser);
routes.put('/user', UserController.putUser);
routes.delete('/user', UserController.deleteUser);

export default routes;
