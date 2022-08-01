import { Request, Response, NextFunction } from "express";
import { uniqWith, isEqual } from "lodash";
import { myDataSource } from "../db/appDataSource";
import { Product } from "../db/entity/product.entity";
import { Cart } from "../db/entity/cart.entity";

export async function initializeCart(req: Request, res: Response, next: NextFunction) {
    const cart = await myDataSource.getRepository(Cart).findOneBy({
        uuid: req.sessionID,
    })
    if(!cart) {
        const cart = await myDataSource.getRepository(Cart).create({
            uuid: req.sessionID,
        });
        const result = await myDataSource.getRepository(Cart).save(cart);
    }
    next();
}

export async function getCart(req: Request, res: Response) {

    const cart = await myDataSource.getRepository(Cart).findOne({
        where: {
            uuid: req.sessionID,
        },
        relations: {
            products: true,
        },
    })
    res.json(cart.products);
}

export async function addProduct(req: Request, res: Response) {
    const cart = await myDataSource.getRepository(Cart).findOne({
        where: {
            uuid: req.sessionID,
        },
        relations: {
            products: true,
        },
    })
    const product = await myDataSource.getRepository(Product).findOneBy({
        id: parseInt(req.params.id),
    });
    cart.products.push(product);
    cart.products = uniqWith(cart.products, isEqual);
    const result = await myDataSource.getRepository(Cart).save(cart);
    res.json(result.products);
}

export async function deleteProduct(req: Request, res: Response) {
    const cart = await myDataSource.getRepository(Cart).findOne({
        where: {
            uuid: req.sessionID,
        },
        relations: {
            products: true,
        },
    })
    cart.products = cart.products.filter(product => product.id != parseInt(req.params.id));
    const result = await myDataSource.getRepository(Cart).save(cart);
    res.json(result.products);
}


