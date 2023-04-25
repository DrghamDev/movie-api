"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const SeriesPartSchema = new mongoose_1.Schema({
    number: {
        type: Number,
        unique: true,
        required: true,
        default: 1,
    },
    seriesId: {
        type: mongodb_1.ObjectId,
        required: true,
        ref: "Series"
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
});
const SeriesSchema = new mongoose_1.Schema({
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
});
exports.Series = (0, mongoose_1.model)("Series", SeriesSchema);
const SeriesPart = (0, mongoose_1.model)("SeriesPart", SeriesPartSchema);
exports.default = exports.Series;
