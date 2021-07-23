import {
    Column,
    Entity,
    CreateDateColumn,
    ObjectIdColumn,
    ObjectID
} from "typeorm";

export enum UserRole {
    CUSTOMER = "customer",
    AGENT = "agent",
    ADMIN = "admin"
}

@Entity("users")
export class User {
    @ObjectIdColumn()
    _id!: ObjectID;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    role: UserRole = UserRole.CUSTOMER;

    @Column()
    failedLoginAttempt: number = 0;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "LOCALTIMESTAMP"
    })
    createdAt!: Date;
}
