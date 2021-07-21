import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id!: string;

    @Column({ unique: true })
    email!: number;

    @Column()
    password!: string;

    @Column({ default: 0 })
    failedLoginAttempt!: number;
}
