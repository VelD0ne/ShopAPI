import { Entity, Column, PrimaryColumn, Index } from "typeorm"

@Entity()
export class Cart_Product {
    @Index()
    @PrimaryColumn("uuid")
    CartsUuid: string

    @Index()
    @PrimaryColumn()
    id: number
}
