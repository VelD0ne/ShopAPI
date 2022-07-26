"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class CartController {
    getCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = req.session.cart || [];
            res.send(cart);
        });
    }
    addProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const product = yield db_1.default.query('SELECT * FROM product where id = $1', [id]);
            const cart = req.session.cart || [];
            cart.push(product.rows[0]);
            req.session.cart = cart;
            res.json(cart);
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            let cart = req.session.cart || [];
            req.session.cart = cart.filter((product) => product.id !== id);
            res.json(req.session.cart);
        });
    }
}
exports.default = new CartController;
