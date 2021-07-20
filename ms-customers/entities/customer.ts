import {Column, Entity, ObjectIdColumn} from "typeorm";

@Entity()
export class Customer {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;
}