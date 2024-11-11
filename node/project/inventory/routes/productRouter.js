import Router from 'express';
import { addProduct, getAllProducts, getProduct, putProductName, removeProduct } from '../controllers/productController.js';

export const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/:name', getProduct);
productRouter.post('/:name', addProduct);
// Fix ???
productRouter.put('/:oldname/:newname', putProductName);
productRouter.delete('/:name', removeProduct);
