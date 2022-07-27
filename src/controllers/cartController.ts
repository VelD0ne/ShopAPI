import { Request, Response } from "express";
import { QueryResult } from "pg";
import db from "../db"

class CartController {
    async getCart(req: Request, res: Response) {
        const cart = req.session.cart || [];
        res.send(cart);
    }

    async addProduct(req: Request, res: Response) {
        const id = req.params.id;
        const product = await db.query('SELECT * FROM product where id = $1', [id]);
        const cart: any = req.session.cart || [];
        cart.push(product.rows[0]);
        req.session.cart = cart;
        res.json(cart);
    }

    async deleteProduct(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        let cart: any = req.session.cart || [];
        req.session.cart = cart.filter((product: { id: number; }) => product.id !== id);
        res.json(req.session.cart);
    }
}

export default new CartController;