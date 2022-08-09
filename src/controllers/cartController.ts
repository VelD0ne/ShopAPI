import { Request, Response } from 'express';
import _, { uniqBy, remove } from 'lodash';
import { productRepository } from '../db/repository/product';
import { cartRepository } from '../db/repository/cart';
import { Cart } from '../db/entity/cart.entity';

let cache: { [sessionId: string]: Cart } = {};

export async function getCart(sessionId: string): Promise<Cart> {
  if (!(sessionId in cache)) {
    const cart = await cartRepository.create({
      uuid: sessionId,
    });
    cart.products = [];

    cache[sessionId] = await cartRepository.save(cart);
  }

  return cache[sessionId];
}

export async function getProducts(req: Request, res: Response) {
  const cart = await getCart(req.sessionID);
  res.json(cart.products);
}

export async function addProduct(req: Request, res: Response) {
  const cart = await getCart(req.sessionID);
  const product = await productRepository.findOneBy({
    id: parseInt(req.params.id),
  });
  cart.products.push(product);
  cart.products = uniqBy(cart.products, 'id');
  const result = await cartRepository.save(cart);
  res.json(result.products);
}

export async function deleteProduct(req: Request, res: Response) {
  const cart = await getCart(req.sessionID);
  const productIdToDelete = parseInt(req.params.id);
  _.remove(
    cart.products,
    (product) => product.id != productIdToDelete
  );
  const result = await cartRepository.save(cart);
  res.json(result.products);
}
