import { Router }  from 'express';
import { getAllProducts, addProduct, getProductById, deleteProduct, updateProduct, } from '../controllers/productos';

const router = Router();

router
    .route('/')
    .get(getAllProducts)
    .post(addProduct);

    
router
    .route('/:id')
    .get(getProductById)
    .delete(deleteProduct)
    .put(updateProduct);

export default router;