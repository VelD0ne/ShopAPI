import { myDataSource } from '../appDataSource';
import { Cart } from '../entity/cart.entity';
export const cartRepository = myDataSource.getRepository(Cart);
