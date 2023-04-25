"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const EpisodeSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    number: {
        type: Number,
    },
    seriesId: {
        type: mongodb_1.ObjectId,
        ref: "Series",
    },
    seriesPartId: {
        type: mongodb_1.ObjectId,
        ref: "SeriesPart"
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
const Episode = (0, mongoose_1.model)("Episode", EpisodeSchema);
exports.default = Episode;
