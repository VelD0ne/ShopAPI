import {
  Entity,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Cart_Product } from './cart_products_product.entity';

@Entity()
export class Cart {
  @PrimaryColumn()
  uuid: string;

  @OneToMany(() => Cart_Product, (cartToProduct) => cartToProduct.cart)
  public cartToProducts!: Cart_Product[];
}
