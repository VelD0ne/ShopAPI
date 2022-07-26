import Router from "express";
const router = Router();
import productController from "../controllers/productController";

router.post('/product', productController.createProduct);
router.get('/product', productController.getProducts);
router.get('/product/:id', productController.getProduct);
router.put('/product', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);



export default router;