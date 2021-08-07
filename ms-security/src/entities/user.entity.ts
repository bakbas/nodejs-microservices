import {
    Column,
    Entity,
    CreateDateColumn,
    ObjectIdColumn,
    ObjectID,
    BeforeInsert
} from "typeorm";
import {
    IsInt,
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
    Matches
} from "class-validator";
import { hash, verify } from "argon2";
import i18next from "../configs/i18n.config";

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
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: i18next.t("errors.passwordTooWeak")
    })
    @IsNotEmpty()
    password: string;

    name: string;
    surname: string;

    @Column("enum", { enum: UserRole })
    role: UserRole = UserRole.CUSTOMER;

    @Column()
    @IsInt()
    failedLoginAttempt = 0;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "LOCALTIMESTAMP"
    })
    createdAt: Date;

    @Column()
    @IsInt()
    status: number; //0-Deactive, 1-Active

    @BeforeInsert()
    beforeInsertActions() {
        this.status = 1;
    }

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
