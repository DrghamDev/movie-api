"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const MovieSeriesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    ended: {
        type: Boolean,
        default: true,
    },
    moviesIds: [
        {
            type: mongodb_1.ObjectId,
            ref: 'Movie',
        }
    ]
});
const MovieSeries = (0, mongoose_1.model)("MovieSeries", MovieSeriesSchema);
exports.default = MovieSeries;
