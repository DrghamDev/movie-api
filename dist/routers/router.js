"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = __importDefault(require("./user.router"));
const category_router_1 = __importDefault(require("./category.router"));
const admin_router_1 = __importDefault(require("./admin.router"));
const mainRouter = (0, express_1.Router)();
mainRouter.get('/', (req, res) => {
    return res.status(200).json({
        message: "Welcome to my website",
    });
});
mainRouter.use("/users", user_router_1.default);
mainRouter.use("/categories", category_router_1.default);
mainRouter.use('/admins', admin_router_1.default);
exports.default = mainRouter;
