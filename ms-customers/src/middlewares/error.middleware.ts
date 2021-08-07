import { Request, Response } from "express";
import {
    ExpressErrorMiddlewareInterface,
    Middleware
} from "routing-controllers";
import { find } from "lodash";
import logger from "../utils/logger.util";
import repositoryErrorFormatter from "../utils/repository.error.formatter.util";
import validationErrorFormatter from "../utils/validation.error.formatter.util";

@Middleware({ type: "after" })
export default class ErrorMiddleware
    implements ExpressErrorMiddlewareInterface
{
    error(error: any, req: Request, res: Response): void {
        const { errors = [], httpCode = 500 } = error;

        let status = httpCode,
            result = error;

        if (find(errors, "constraints")) {
            //return res.status(httpCode).json(validationErrorFormatter(errors));
            result = validationErrorFormatter(errors);
        }

        if (error.driver && !!error.writeErrors) {
            //return res.status(400).json(repositoryErrorFormatter(error));
            status = 400;
            result = repositoryErrorFormatter(error);
        }

        logger.error(result);

        res.status(status).json({ error: result });
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
