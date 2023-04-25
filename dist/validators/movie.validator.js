"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const mongoose_1 = require("mongoose");
const MovieSchema = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().min(12),
    accessType: joi_1.default.string().valid("free", "purchase", "plane").default("free"),
    planId: joi_1.default.string().custom((value, helpers) => {
        if ((0, mongoose_1.isValidObjectId)(value)) {
            return value;
        }
        else {
            throw new Error("Unvalid object id");
        }
    }),
    // categories 
});
