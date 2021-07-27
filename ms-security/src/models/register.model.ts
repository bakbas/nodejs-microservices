import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
    Matches
} from "class-validator";
import { Match } from "../decorators/match.decorator";
import i18next from "../configs/i18n.config";

export class Register {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: i18next.t("errors.passwordTooWeak")
    })
    @IsNotEmpty()
    password: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Match("password", {
        message: i18next.t("errors.passwordNotMatched")
    })
    @IsNotEmpty()
    passwordConfirm: string;
}
