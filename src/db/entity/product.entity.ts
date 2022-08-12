import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cart_Product } from './cart_products_product.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column()
  price: number;

  @OneToMany(() => Cart_Product, (cartToProduct) => cartToProduct.cart)
  public cartToProducts!: Cart_Product[];
}
