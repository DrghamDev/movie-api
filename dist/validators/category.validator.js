"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const CategorySchema = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
});
const categoryValidator = (data) => {
    return CategorySchema.validate(data);
};
exports.categoryValidator = categoryValidator;
