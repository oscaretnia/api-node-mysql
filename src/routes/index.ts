import { Router } from 'express';
import auth from './auth';
import user from './user';
import product from './products';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/products', product);

export default routes;
