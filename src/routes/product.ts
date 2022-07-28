import Router from "express";
const router = Router();
import * as productController from "../controllers/productController";

router.post('/products', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.put('/products', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);



export { router as productRouter };