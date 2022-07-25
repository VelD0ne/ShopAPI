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
class ProductController {
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, amount, price } = req.body;
            const newPerson = yield db_1.default.query(`INSERT INTO product (name, amount, price) values ($1, $2, $3) RETURNING *`, [name, amount, price]);
            res.json(newPerson.rows[0]);
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield db_1.default.query('SELECT * FROM product where id = $1', [id]);
            res.json(user.rows[0]);
        });
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield db_1.default.query('SELECT * FROM product');
            res.json(products.rows);
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, amount, price } = req.body;
            const product = yield db_1.default.query('UPDATE product set name = $1, amount = $2, price = $3 where id =$4 RETURNING *', [name, amount, price, id]);
            res.json(product.rows[0]);
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const product = yield db_1.default.query('DELETE FROM product where id = $1 RETURNING *', [id]);
            res.json(product.rows[0]);
        });
    }
}
exports.default = new ProductController;
