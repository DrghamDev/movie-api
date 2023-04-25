"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routers/router"));
const database_connection_1 = __importDefault(require("./config/database-connection"));
const app = (0, express_1.default)();
// Set up main middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Set up router
app.use('/', router_1.default);
// Connect to the database
(0, database_connection_1.default)();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
