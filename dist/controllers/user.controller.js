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
exports.show = exports.index = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find();
        return res.status(200).json({
            success: true,
            messages: [
                "User has fetched successfully",
            ],
            data: users,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            messages: [
                "Something went wrong",
            ],
            data: [],
        });
    }
});
exports.index = index;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findById(req.params.id);
        if (user) {
            return res.status(200).json({
                success: true,
                messages: [
                    "User has fetched successfully",
                ],
                data: user,
            });
        }
        return res.status(404).json({
            success: false,
            messages: [
                "User may not found",
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
            data: [],
        });
    }
});
exports.show = show;
