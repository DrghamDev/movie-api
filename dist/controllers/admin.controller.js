"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassowrd = exports.login = exports.register = exports.index = void 0;
const admin_model_1 = __importDefault(require("../models/admin.model"));
const admin_validator_1 = require("../validators/admin.validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const global_vars_1 = __importDefault(require("../constants/global-vars"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const admin_validator_2 = require("../validators/admin.validator");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admins = yield admin_model_1.default.find();
        return res.status(200).json({
            success: true,
            messages: [
                "Admins have fetched successfully",
            ],
            data: admins.map((admin, index) => {
                return {
                    _id: admin._id,
                    index: index,
                    name: admin.name,
                    email: admin.email,
                };
            })
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            messages: [
                "Something went wrong",
            ],
            data: []
        });
    }
});
exports.index = index;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = (0, admin_validator_1.adminRegisterValidator)(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            messages: error.details.map((item) => item.message),
            data: []
        });
    }
    try {
        const admin = yield admin_model_1.default.create({
            name: value.name,
            email: value.email,
            password: yield bcryptjs_1.default.hash(value.password, global_vars_1.default.passwordHashingSalt),
        });
        const payload = {
            _id: admin.id,
            name: admin.name,
            email: admin.email,
        };
        return res.status(201).json({
            success: true,
            messages: [
                "Admin has registered successfully"
            ],
            data: {
                token: jsonwebtoken_1.default.sign(payload, global_vars_1.default.adminSecretKey),
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            messages: [
                "Something went wrong",
            ],
            data: []
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = (0, admin_validator_2.adminLoginValidator)(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            messages: error.details.map((item) => item.message),
            data: [],
        });
    }
    try {
        const admin = yield admin_model_1.default.findOne({ email: value.email });
        if (!admin) {
            return res.status(404).json({
                success: false,
                messages: [
                    "wrong email address",
                ],
                data: [],
            });
        }
        if (!(yield bcryptjs_1.default.compare(value.password, admin.password))) {
            return res.status(400).json({
                success: false,
                messages: [
                    "Password is not correct",
                ]
            });
        }
        const payload = {
            _id: admin._id,
            name: admin.name,
            email: admin.email,
        };
        return res.status(200).json({
            success: true,
            messages: [
                "You have logged in successfully",
            ],
            data: {
                token: jsonwebtoken_1.default.sign(payload, global_vars_1.default.adminSecretKey)
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            messages: [
                "Something went wrong",
            ],
            data: []
        });
    }
});
exports.login = login;
const changePassowrd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = (0, admin_validator_1.adminPasswordModifyValidator)(req.body);
    if (error) {
        return res.status(200).json({
            success: false,
            messages: error.details.map((item) => item.message),
            data: [],
        });
    }
    try {
        const admin = yield admin_model_1.default.findOne({ email: value.email });
        if (!admin) {
            return res.status(404).json({
                success: false,
                messages: [
                    "Email may not correct",
                ]
            });
        }
        if (!(yield bcryptjs_1.default.compare(value.oldPassword, admin.password))) {
            return res.status(400).json({
                success: false,
                messages: [
                    "Password may not correct",
                ]
            });
        }
        admin.password = yield bcryptjs_1.default.hash(value.newPassword, global_vars_1.default.passwordHashingSalt);
        yield admin.save();
        return res.status(200).json({
            success: true,
            messages: [
                "Password updated successfully",
            ],
            data: [],
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            messages: [
                "Something went wrong",
            ],
            data: []
        });
    }
});
exports.changePassowrd = changePassowrd;
