import { parse } from "hjson";
import i18next from "../configs/i18n.config";

const ErrorList: { [key: string]: string } = {
    email: i18next.t("errors.usedEmail")
};

type Error = {
    code: number;
    writeErrors: any;
};

const RepositoryErrorFormatter = (error: Error) => {
    const { code, writeErrors = [] } = error;
    if (code === 11000) {
        const errArr =
            writeErrors[0]?.err?.errmsg?.match(/[^{\}]+(?=})/g) || [];
        const errObj = parse(`{${errArr[0]?.trim() || ""}}`);
        let [first] = Object.keys(errObj as {});
        const validation = { [first]: ErrorList[first] };
        return { validation };
    }

    return { error };
};

export default RepositoryErrorFormatter;
