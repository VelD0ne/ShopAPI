"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartController_1 = __importDefault(require("../controllers/cartController"));
const router = (0, express_1.default)();
router.get('/cart', cartController_1.default.getCart);
router.post('/cart/add/product/:id', cartController_1.default.addProduct);
router.delete('/cart/delete/product/:id', cartController_1.default.deleteProduct);
exports.default = router;
