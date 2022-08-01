import { Request, Response } from "express";
import { myDataSource } from "../db/appDataSource";
import { Product } from "../db/entity/product.entity";

export async function createProduct(req: Request, res: Response) {
    const product = await myDataSource.getRepository(Product).create(req.body);
    const result = await myDataSource.getRepository(Product).save(product);
    res.json(result);
}

export async function getProduct(req: Request, res: Response) {
    const product = await myDataSource.getRepository(Product).findOneBy({
        id: parseInt(req.params.id),
    });
    res.json(product);
}

export async function getProducts(req: Request, res: Response) {
    const products = await myDataSource.getRepository(Product).find();
    res.json(products)
}

export async function updateProduct(req: Request, res: Response) {
    const product = await myDataSource.getRepository(Product).findOneBy({
        id: parseInt(req.params.id),
    });
    myDataSource.getRepository(Product).merge(product, req.body);
    const result = await myDataSource.getRepository(Product).save(product);
    res.json(result);
}
export async function deleteProduct(req: Request, res: Response) {
    const products = await myDataSource.getRepository(Product).delete(req.params.id);
    res.json(products)
}

