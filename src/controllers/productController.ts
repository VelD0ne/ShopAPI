import { Request, Response } from "express";
import db from "../db"

class ProductController {
    async createProduct(req: Request, res: Response) {
        const {name, amount, price} = req.body;
        const newPerson = await db.query(`INSERT INTO product (name, amount, price) values ($1, $2, $3) RETURNING *`, [name, amount, price]);
        res.json(newPerson.rows[0]);
    }

    async getProduct(req: Request, res: Response) {
        const id = req.params.id;
        const product = await db.query('SELECT * FROM product where id = $1', [id]);
        res.json(product.rows[0]);
    }

    async getProducts(req: Request, res: Response) {
        const products = await db.query('SELECT * FROM product');
        res.json(products.rows);
    }

    async updateProduct(req: Request, res: Response) {
        const {id, name, amount, price} = req.body;
        const product = await db.query('UPDATE product set name = $1, amount = $2, price = $3 where id =$4 RETURNING *', [name, amount, price, id])
        res.json(product.rows[0]);
    }
    async deleteProduct(req: Request, res: Response) {
        const id = req.params.id;
        const product = await db.query('DELETE FROM product where id = $1 RETURNING *', [id]);
        res.json(product.rows[0]);
    }

}

export default new ProductController;
