"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_response_1 = require("../utils/api-response");
const bodyValidatorMiddleware = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return (0, api_response_1.apiResponseFaild)(res, 200, error.details.map((item) => item.message), []);
    }
    return next();
};
exports.default = bodyValidatorMiddleware;
