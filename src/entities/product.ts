import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    amount: number

    @Column()
    price: number

}

