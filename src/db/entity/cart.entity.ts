import { Entity, PrimaryColumn, ManyToMany, JoinTable } from "typeorm"
import { Product } from "./product.entity";

@Entity()
export class Cart {
    @PrimaryColumn('uuid')
    uuid: string

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]
}

