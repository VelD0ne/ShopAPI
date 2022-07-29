import { Request, Response } from "express";
import { myDataSource } from "../db/appDataSource";
import { Product } from "../db/entity/product.entity"
import db from "../db"


export async function createProduct(req: Request, res: Response) {
    const {name, amount, price} = req.body;
    const newPerson = await db.query(`INSERT INTO product (name, amount, price) values ($1, $2, $3) RETURNING *`, [name, amount, price]);
    res.json(newPerson.rows[0]);
}

export async function getProduct(req: Request, res: Response) {
    const id = req.params.id;
    const product = await db.query('SELECT * FROM product where id = $1', [id]);
    res.json(product.rows[0]);
}

export async function getProducts(req: Request, res: Response) {
    const products = await myDataSource.getRepository(Product).find();
    res.json(products)
}

export async function updateProduct(req: Request, res: Response) {
    const {id, name, amount, price} = req.body;
    const product = await db.query('UPDATE product set name = $1, amount = $2, price = $3 where id =$4 RETURNING *', [name, amount, price, id])
    res.json(product.rows[0]);
}
export async function deleteProduct(req: Request, res: Response) {
    const id = req.params.id;
    const product = await db.query('DELETE FROM product where id = $1 RETURNING *', [id]);
    res.json(product.rows[0]);
}

