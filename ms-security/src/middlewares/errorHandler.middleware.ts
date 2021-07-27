import { Request, Response } from "express";
import {
    ExpressErrorMiddlewareInterface,
    Middleware
} from "routing-controllers";
import { find } from "lodash";
import { validationErrorFormatter } from "../utils";

@Middleware({ type: "after" })
export default class ErrorHandlerMiddleware
    implements ExpressErrorMiddlewareInterface
{
    error(error: any, req: Request, res: Response) {
        const { errors = [], httpCode = 500, name } = error;
        console.log("error.constructor.name", error.constructor.name);
        console.log("name", name);
        console.log(error);
        if (!!find(errors, "constraints")) {
            res.status(httpCode).json(validationErrorFormatter(errors));
        }

        res.status(httpCode).json({ error });

        // switch (name) {
        //     case "NotFoundError": //404
        //         res.status(httpCode).json(errors);
        //         break;

        //     case "BadRequestError": //400
        //         res.status(httpCode).json(validationErrorFormatter(errors));
        //         break;

        //     case "UnauthorizedError": //401
        //         res.status(httpCode).json(errors);
        //         break;

        //     default:
        //         res.status(httpCode).json(errors);
        //         break;
        // }
    }
}

/*
400 BadRequestError
403 ForbiddenError
500 InternalServerError
406 NotAcceptableError
404 NotFoundError
401 UnauthorizedError
*/
