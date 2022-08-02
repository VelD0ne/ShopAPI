import { myDataSource } from "../appDataSource";
import { Cart } from "../entity/cart.entity";
const cartRepository = myDataSource.getRepository(Cart);
export { cartRepository };