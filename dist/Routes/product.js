"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const productController_1 = __importDefault(require("../controllers/productController"));
router.post('/product', productController_1.default.createProduct);
router.get('/product', productController_1.default.getProducts);
router.get('/product/:id', productController_1.default.getProduct);
router.put('/product', productController_1.default.updateProduct);
router.delete('/product/:id', productController_1.default.deleteProduct);
exports.default = router;
