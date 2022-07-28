import { Entity, PrimaryColumn, ManyToMany, JoinTable } from "typeorm"
import { Product } from "./product.entity";

@Entity({ name: 'carts'})
export class Cart {
    @PrimaryColumn()
    uuid: string

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]
}

