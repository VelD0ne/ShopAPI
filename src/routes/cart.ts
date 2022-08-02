import Router from "express";
import * as cartController from "../controllers/cartController";
const router = Router();

router.get('/cart', cartController.getProducts);
router.put('/cart/products/:id', cartController.addProduct);
router.delete('/cart/products/:id', cartController.deleteProduct);


export { router as cartRouter };