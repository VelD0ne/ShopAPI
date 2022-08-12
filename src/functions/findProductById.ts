import { Cart_Product } from '../db/entity/cart_products_product.entity';

export function findProductById(productId: number, products: Cart_Product[]): Cart_Product {
  const product = products.find(
    (cartToProduct: Cart_Product) => cartToProduct.productId == productId
  );
  return product;
}
