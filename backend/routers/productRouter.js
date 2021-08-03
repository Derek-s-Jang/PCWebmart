import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
import { isAuth, isAdmin } from '../utils.js';

const productRouter = express.Router();

productRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.send(products);
    })
);

productRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        // await Product.remove({});
        const createdProducts = await Product.insertMany(data.products);
        res.send({ createdProducts });
    })
);

productRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.send(product);
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

productRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const product = new Product({
            name: 'sample name' + Date.now(),
            image: '/images/placeholder.jpg',
            price: 0,
            category: 'palceholder category',
            brand: 'placeholder brand',
            countInStock: 0,
            rating: 0,
            numReviews: 0,
            description: 'Placeholder',
        });
        const createdProduct = await product.save();
        res.send({ message: 'Product Created', product: createdProduct });
    })
);

export default productRouter;