import { cartRepository } from '../db/repository/cart';
import { Cart } from '../db/entity/cart.entity';

let cache: { [sessionId: string]: Cart } = {};

export async function getCart(sessionId: string): Promise<Cart> {
  if (!(sessionId in cache)) {
    const cart = await cartRepository.create({
      uuid: sessionId,
    });
    cart.cartToProducts = [];

    cache[sessionId] = await cartRepository.save(cart);
  }

  return cache[sessionId];
}
