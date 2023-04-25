"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ActorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        default: "male",
    },
    birthDate: {
        type: Date,
    }
}, { timestamps: true });
const Actor = (0, mongoose_1.model)("Actor", ActorSchema);
exports.default = Actor;
