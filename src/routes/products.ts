import { checkJwt } from '../middlewares/jwt';
import { ProductController } from '../controller/ProductController';
import { Router } from 'express';

const router = Router();

// Get all products
router.get('/', [checkJwt], ProductController.getAll);

// Get one product
router.get('/:id', [checkJwt], ProductController.getById);

// Create a new product
router.post('/', [checkJwt], ProductController.new);

// Edit product
router.patch('/:id', [checkJwt], ProductController.edit);

// Delete product
router.delete('/:id', [checkJwt], ProductController.delete);

export default router;