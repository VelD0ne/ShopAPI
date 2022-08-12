import { myDataSource } from '../appDataSource';
import { Cart_Product } from '../entity/cart_products_product.entity';
export const cartToProductRepository = myDataSource.getRepository(Cart_Product);
