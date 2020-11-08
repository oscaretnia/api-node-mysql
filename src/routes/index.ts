import { Router } from 'express';
import auth from './auth';
import user from './user';
import product from './product';

const routes = Router();

routes.use('/api/auth', auth);
routes.use('/api/user', user);
routes.use('/api/product', product);

export default routes;
