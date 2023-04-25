"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const MovieSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    accessType: {
        type: String,
        enum: ["free", "purchase", "plan"],
        default: "free",
    },
    categories: [
        {
            type: mongodb_1.ObjectId,
            ref: "Category",
        },
    ],
    planId: {
        type: mongodb_1.ObjectId,
        ref: "Plan"
    },
    movieSeriesId: {
        type: mongodb_1.ObjectId,
        ref: "MovieSeries",
    },
    description: {
        type: String,
    },
    poster: {
        type: String,
    },
    rate: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0,
    },
    yearRelease: {
        type: Number,
    },
    reviews: [
        {
            userId: {
                type: mongodb_1.ObjectId,
                required: true,
                unique: true,
                ref: "User"
            },
            body: {
                type: String,
                required: true,
            },
            data: {
                data: Date,
            },
            rate: {
                type: Number,
                default: 0,
            }
        }
    ],
}, { timestamps: true });
const Movie = (0, mongoose_1.model)("Movie", MovieSchema);
exports.default = Movie;
