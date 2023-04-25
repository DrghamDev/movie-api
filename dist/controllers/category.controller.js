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
exports.destory = exports.update = exports.show = exports.create = exports.index = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const category_validator_1 = require("../validators/category.validator");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_model_1.default.find();
        return res.status(200).json({
            success: true,
            messages: [
                "Categories have fetched successfully",
            ],
            data: categories,
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
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = (0, category_validator_1.categoryValidator)(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            messages: error.details.map((item) => item.message),
            data: [],
        });
    }
    try {
        const category = yield category_model_1.default.create({
            name: value.name,
        });
        return res.status(201).json({
            success: true,
            messages: [
                "Category created successfully",
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
exports.create = create;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.default.findById(req.params.id);
        if (category) {
            return res.status(200).json({
                success: true,
                messages: [
                    "Category has fetched successfully"
                ],
                data: category,
            });
        }
        return res.status(404).json({
            success: false,
            messages: [
                "Category id may not found",
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
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = (0, category_validator_1.categoryValidator)(req.body);
    if (error) {
        return res.status(200).json({
            success: false,
            messages: error.details.map((item) => item.message),
            data: [],
        });
    }
    try {
        const category = yield category_model_1.default.findByIdAndUpdate(req.params.id, { name: value.name });
        if (category) {
            return res.status(200).json({
                success: true,
                messages: [
                    "Category has updated successfully"
                ],
                data: category,
            });
        }
        return res.status(404).json({
            success: false,
            messages: [
                "Category id may not found",
            ],
            data: []
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
exports.update = update;
const destory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.default.findByIdAndDelete(req.params.id);
        if (category) {
            return res.status(200).json({
                success: true,
                messages: [
                    "Category has deleted successfully"
                ],
                data: category,
            });
        }
        return res.status(404).json({
            success: false,
            messages: [
                "Category id may not found",
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
exports.destory = destory;
