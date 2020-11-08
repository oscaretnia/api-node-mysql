import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Product } from '../entity/Product';
import { validate } from 'class-validator';
import config from '../config/config';

export class ProductController {

    static getAll = async (req: Request, res: Response) => {
    
        const productRepository = getRepository(Product);
        let products;
    
        try {
          products = await productRepository.find({ select: ['id', 'code', 'name', 'description', 'reference', 'locationStorage', 'image', 'createdAt'] });
        } catch (e) {
          res.status(404).json({ message: 'Somenthing goes wrong!' });
        }
    
        if (products.length > 0) {
          res.send({ data: products, success: true });
        } else {
          res.status(404).json({ message: 'Not result' });
        }
      };
    
      static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const productRepository = getRepository(Product);
        try {
          const product = await productRepository.findOneOrFail(id);
          res.json({ data: product, success: true});
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };
    
      static new = async (req: Request, res: Response) => {
    
        const { code, name, description, reference, locationStorage, image } = req.body;
        const product = new Product();
    
        product.code = code;
        product.name = name;
        product.description = description;
        product.reference = reference;
        product.locationStorage = locationStorage;
        product.image = `${config.uploads}${image}`;
    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(product, validationOpt);
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        const productRepository = getRepository(Product);
        try {
          await productRepository.save(product);
        } catch (e) {
          return res.status(409).json({ message: 'Code product already exist' });
        }
        // All ok
        res.status(200).json({ message: 'Product created', success: true });
      };
    
      static edit = async (req: Request, res: Response) => {

        console.log(req.body)

        let product;
        const { id } = req.params;
        const { code, name, description, reference, locationStorage, image } = req.body;
        
    
        const productRepository = getRepository(Product);
        // Try get product
        try {
            product = await productRepository.findOneOrFail(id);
            product.code = code;
            product.name = name;
            product.description = description;
            product.reference = reference;
            product.locationStorage = locationStorage;
            product.image = `${config.uploads}${image}`;
        } catch (e) {
          console.log(e)
          return res.status(404).json({ message: 'Product not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(product, validationOpt);
    
        if (errors.length > 0) {
          console.log(errors)
          return res.status(400).json(errors);
        }
    
        // Try to save product
        try {
          await productRepository.save(product);
        } catch (e) {
          return res.status(409).json({ message: 'Code product already in use' });
        }
    
        res.status(201).json({ message: 'Product update', success: true });
      };
    
      static delete = async (req: Request, res: Response) => {

        const { id } = req.params;
        const productRepository = getRepository(Product);
        let product: Product;
    
        try {
            product = await productRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        // Remove user
        productRepository.delete(id);
        res.status(201).json({ message: 'Product deleted', success: true });
      };    

}