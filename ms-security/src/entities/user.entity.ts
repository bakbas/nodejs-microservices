import {
    Column,
    Entity,
    CreateDateColumn,
    ObjectIdColumn,
    ObjectID
} from "typeorm";
import { IsInt, IsEmail, IsNotEmpty } from "class-validator";
import { hash, verify } from "argon2";

export enum UserRole {
    CUSTOMER = "customer",
    AGENT = "agent",
    ADMIN = "admin"
}

@Entity("users")
export class User {
    @ObjectIdColumn({ name: "_id" })
    id: ObjectID;

    @Column({ nullable: false, unique: true })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column({ nullable: false })
    @IsNotEmpty()
    password: string;

    @Column("enum", { enum: UserRole })
    role: UserRole = UserRole.CUSTOMER;

    @Column()
    @IsInt()
    failedLoginAttempt: number = 0;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "LOCALTIMESTAMP"
    })
    createdAt: Date;

    @Column()
    @IsInt()
    status: number = 0;

    public static async comparePassword(
        user: User,
        password: string
    ): Promise<boolean> {
        return await verify(user?.password as string, password);
    }

    public static async hashPassword(password: string): Promise<string> {
        return await hash(password);
    }
}
