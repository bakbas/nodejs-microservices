import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import {
    dateFns,
    isDateValid,
    isDateAfterYesterday,
    isDateEqualAfterSelectedDate
} from "UTILS";

import { DATE_TIME } from "UTILS/constants";

export const useValidation = () => {
    const { t } = useTranslation();

    return {
        email: Yup.string()
            .email(t("errors.email"))
            .required(t("errors.required")),

        username: Yup.string()
            .min(5, t("errors.min", { min: 5 }))
            .max(50, t("errors.max", { max: 50 }))
            .required(t("errors.required")),

        password: Yup.string()
            .min(8, t("errors.min", { min: 8 }))
            .required(t("errors.required")),

        required: Yup.string().required(t("errors.required")),

        number: Yup.number().required(t("errors.required")),

        effectiveDate: Yup.string()
            .required(t("errors.required"))
            .test("is-date", t("errors.invalidDate"), isDateValid)
            .test(
                "is-after-yesterday",
                t("errors.mustBeBiggerThanYesterday"),
                isDateAfterYesterday
            ),

        expiredDate: Yup.string()
            .required(t("errors.required"))
            .test("is-date", t("errors.invalidDate"), isDateValid)
            .test(
                "is-after-effective-date",
                t("errors.mustBeBiggerThanEffectiveDate"),
                function (value) {
                    if (!this.parent.effectiveDate) return true;
                    const effectiveDate = dateFns.parse(
                        this.parent.effectiveDate,
                        DATE_TIME.DATE_FORMAT,
                        new Date()
                    );
                    const expiredDate = dateFns.parse(
                        value,
                        DATE_TIME.DATE_FORMAT,
                        new Date()
                    );
                    return dateFns.isAfter(expiredDate, effectiveDate);
                }
            ),

        isEqualAfterSelectedAndTodayDate: (selectedDate) =>
            Yup.string()
                .required(t("errors.required"))
                .test("is-date", t("errors.invalidDate"), isDateValid)
                .test(
                    "is-equal-or-after-selected-date",
                    t("errors.mustBeBiggerThanSelectedDate", { selectedDate }),
                    function (value) {
                        if (!selectedDate) return true;
                        return isDateEqualAfterSelectedDate(
                            value,
                            selectedDate
                        );
                    }
                )
                .test(
                    "is-equal-or-after-today",
                    t("errors.mustBeBiggerThanToday"),
                    isDateAfterYesterday
                ),

        sortCode: Yup.string()
            .matches(/(\d{2}-?){2}\d{2}/, t("errors.invalidSortCode"))
            .required(t("errors.required")),

        age: Yup.number()
            .positive(t("errors.positive"))
            .min(18, t("errors.minAge"))
            .max(100, t("errors.maxAge"))
            .required(t("errors.required")),

        maxAge: Yup.number()
            .required(t("errors.required"))
            .min(18, t("errors.minAge"))
            .max(100, t("errors.maxAge"))
            .test(
                "is-bigger-min-age",
                t("errors.mustBeBiggerThanMinAge"),
                function (value) {
                    if (!this.parent.minAge) return true;
                    return (
                        parseInt(value, 10) > parseInt(this.parent.minAge, 10)
                    );
                }
            ),

        maxLoan: (max) =>
            Yup.number()
                .required(t("errors.required"))
                .test(
                    "is-equal-or-less-max",
                    t("errors.maxAmount", { max }),
                    function (value) {
                        if (!max) return true;
                        return parseInt(value, 10) <= parseInt(max, 10);
                    }
                )
                .test(
                    "is-bigger-min-loan",
                    t("errors.mustBeBiggerThanMinLoan"),
                    function (value) {
                        if (!this.parent.minLoan) return true;
                        return (
                            parseInt(value, 10) >
                            parseInt(this.parent.minLoan, 10)
                        );
                    }
                ),

        positiveNumber: Yup.number()
            .required(t("errors.required"))
            .positive(t("errors.positive")),

        description: Yup.string()
            .max(150, t("errors.max", { max: 150 }))
            .required(t("errors.required"))
    };
};
