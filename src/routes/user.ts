import { checkJwt } from './../middlewares/jwt';
import { UserController } from './../controller/UserController';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', [checkJwt], UserController.getAll);

// Get one user
router.get('/:id', [checkJwt], UserController.getById);

// Create a new user
router.post('/', [checkJwt], UserController.new);

// Edit user
router.patch('/:id', [checkJwt], UserController.edit);

// Delete
router.delete('/:id', [checkJwt], UserController.delete);

export default router;
