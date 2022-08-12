import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from './product.entity';

@Entity({ name: 'cart_products_product' })
export class Cart_Product {
  @PrimaryGeneratedColumn()
  cartProductId: number;
  @Column()
  cartUuid: string;
  @Column()
  productId: number;
  @Column()
  productAmout: number;

  @ManyToOne(() => Product, (product) => product.cartToProducts)
  public product!: Product;

  @ManyToOne(() => Cart, (cart) => cart.cartToProducts)
  public cart!: Cart;
}
