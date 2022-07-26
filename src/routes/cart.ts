import Router from "express";
import cartController from "../controllers/cartController";
const router = Router();

router.get('/cart', cartController.getCart);
router.post('/cart/add/product/:id', cartController.addProduct);
router.delete('/cart/delete/product/:id', cartController.deleteProduct);


export default router;