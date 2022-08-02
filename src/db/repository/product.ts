import { myDataSource } from "../appDataSource";
import { Product } from "../entity/product.entity";
const productRepository = myDataSource.getRepository(Product);
export { productRepository };