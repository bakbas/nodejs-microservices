import {
    Column,
    Entity,
    CreateDateColumn,
    ObjectIdColumn,
    ObjectID,
    BeforeInsert
} from "typeorm";
import { IsEmail, IsNotEmpty, IsInt } from "class-validator";
import Address from "@models/address.model";

export enum OnboardingStatus {
    PHONE_CAPTURED = "PHONE_CAPTURED",
    PHONE_VERIFIED = "PHONE_VERIFIED",
    PRODUCT_CURRENCY_CAPTURED = "PRODUCT_CURRENCY_CAPTURED",
    PRODUCT_TYPE_CAPTURED = "PRODUCT_TYPE_CAPTURED",
    PROFILE_CAPTURED = "PROFILE_CAPTURED",
    ADDRESS_CAPTURED = "ADDRESS_CAPTURED",
    ID_VERIFICATION_STARTED = "ID_VERIFICATION_STARTED",
    ID_DOCUMENT_LOADED = "ID_DOCUMENT_LOADED",
    ID_VERIFIED = "ID_VERIFIED",
    REGISTRATION_COMPLETE = "REGISTRATION_COMPLETE"
}

@Entity("customers")
class Customer {
    @ObjectIdColumn({ name: "_id" })
    id: ObjectID;

    @Column({ nullable: false, unique: true })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column()
    phone: string;

    @Column({ nullable: false })
    @IsNotEmpty()
    name: string;

    @Column({ nullable: false })
    @IsNotEmpty()
    surname: string;

    @Column()
    dateOfBirth: string;

    @Column()
    status: number;

    @Column()
    onboardingStatus: string;

    @Column()
    emailVerified: boolean;

    @Column()
    nationality: string;

    @Column()
    address: Address;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "LOCALTIMESTAMP"
    })
    createdAt: Date;

    @BeforeInsert()
    beforeInsertActions() {
        this.status = 1;
    }
}

export default Customer;
