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
    // @ObjectIdColumn()
    // _id: ObjectID;
    @ObjectIdColumn({ name: "_id" })
    id: ObjectID;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column()
    role: UserRole = UserRole.CUSTOMER;

    @Column()
    failedLoginAttempt: number = 0;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "LOCALTIMESTAMP"
    })
    createdAt: Date;
}
