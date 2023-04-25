"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminPasswordModifyValidator = exports.adminLoginValidator = exports.adminRegisterValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const AdminRegisterSchema = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
});
const AdminLoginSchema = joi_1.default.object().keys({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(0).required(),
});
const AdminPasswordModificationSchema = joi_1.default.object().keys({
    email: joi_1.default.string().email().required(),
    oldPassword: joi_1.default.string().min(8).required(),
    newPassword: joi_1.default.string().min(8).required(),
});
const adminRegisterValidator = (data) => {
    return AdminRegisterSchema.validate(data, { abortEarly: false });
};
exports.adminRegisterValidator = adminRegisterValidator;
const adminLoginValidator = (data) => {
    return AdminLoginSchema.validate(data, { abortEarly: false });
};
exports.adminLoginValidator = adminLoginValidator;
const adminPasswordModifyValidator = (data) => {
    return AdminPasswordModificationSchema.validate(data, { abortEarly: false });
};
exports.adminPasswordModifyValidator = adminPasswordModifyValidator;
