import { myDataSource } from '../appDataSource';
import { Product } from '../entity/product.entity';
export const productRepository = myDataSource.getRepository(Product);
