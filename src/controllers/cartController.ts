import { Request, Response } from 'express';
import _ from 'lodash';
import { Cart_Product } from '../db/entity/cart_products_product.entity';
import { cartRepository } from '../db/repository/cart';
import { cartToProductRepository } from '../db/repository/cartToProduct';
import { findProductById, getCart } from '../functions/index';

export async function getProducts(req: Request, res: Response) {
  const cart = await getCart(req.sessionID);
  res.json(cart.cartToProducts);
}

export async function addProduct(req: Request, res: Response) {
  const cart = await getCart(req.sessionID);
  const product = findProductById(parseInt(req.params.id), cart.cartToProducts);

  if (product) {
    product.productAmout += req.body.amount;
  } else {
    const cartToProduct = await cartToProductRepository.create({
      productId: parseInt(req.params.id),
      cartUuid: cart.uuid,
      productAmout: req.body.amount,
    });
    cart.cartToProducts.push(cartToProduct);
  }
  const result = await cartRepository.save(cart);

  res.json(result.cartToProducts);
}

export async function deleteProduct(req: Request, res: Response) {
  const cart = await getCart(req.sessionID);
  const productIdToDelete = parseInt(req.params.id);
  _.remove(cart.cartToProducts, (product: Cart_Product) => product.productId == productIdToDelete);
  const result = await cartRepository.save(cart);
  res.json(result.cartToProducts);
}
