import {Column, Entity, ObjectIdColumn} from "typeorm";

@Entity()
export class Account {
    @ObjectIdColumn()
    id: string;

    @Column()
    type: string;
}