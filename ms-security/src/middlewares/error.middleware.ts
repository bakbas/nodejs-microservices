import { Request, Response, NextFunction } from "express";
import {
    ExpressErrorMiddlewareInterface,
    Middleware
} from "routing-controllers";
import { find } from "lodash";
import { validationErrorFormatter, repositoryErrorFormatter } from "../utils";

@Middleware({ type: "after" })
export default class ErrorMiddleware
    implements ExpressErrorMiddlewareInterface
{
    error(error: any, req: Request, res: Response, next: NextFunction) {
        const { errors = [], httpCode = 500, name } = error;
        if (!!find(errors, "constraints")) {
            return res.status(httpCode).json(validationErrorFormatter(errors));
        }

        if (error.driver && !!error.writeErrors) {
            return res.status(400).json(repositoryErrorFormatter(error));
        }

        res.status(httpCode).json({ error });
    }
}

/*
400 BadRequestError
401 UnauthorizedError
403 ForbiddenError
404 NotFoundError
406 NotAcceptableError
500 InternalServerError
*/
