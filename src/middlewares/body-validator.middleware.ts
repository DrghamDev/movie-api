import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { apiResponseFaild } from "../utils/api-response";

const bodyValidatorMiddleware =
  (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) : Response | void => {
    const { error } = schema.validate(req.body);
    if (error) {
      return apiResponseFaild(
        res,
        200,
        error.details.map((item) => item.message),
        []
      );
    }
    return next();
  };

export default bodyValidatorMiddleware;