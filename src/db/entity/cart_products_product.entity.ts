import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
