import { ObjectId } from 'mongodb';
import { Schema, model } from "mongoose";

const SeriesPartSchema = new Schema({
    number : {
        type : Number,
        unique : true,
        required : true,
        default : 1,
    },
    seriesId : {
        type : ObjectId,
        required : true,
        ref : "Series"
    },
    description : {
        type : String,
    },
    poster : {
        type : String,
    },
    rate : {
        type : Number,
        default : 0,
    },
    yearRelease: {
        type : Number,
    },
    reviews : [
        {
            userId : {
                type : ObjectId,
                required : true,
                unique : true,
                ref : "User"
            },
            body : {
                type : String,
                required : true,
            },
            data : {
                data : Date,
            },
            rate : {
                type : Number,
                default : 0,
            }
        }
    ],
})

const SeriesSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    accessType : {
        type : String,
        enum : ["free", "purchase", "plan"],
        default : "free",
    },
    categories : [
        {
            type : ObjectId,
            ref : "Category",
        },
    ],
    planId : {
        type : ObjectId,
        ref : "Plan"
    },
    poster : {
        type : String,
    },
    rate : {
        type : Number,
        default : 0,
    },
    price : {
        type : Number,
        default : 0,
    },
    discount : {
        type : Number,
        min : 0,
        max : 100,
        default : 0,
    },
    yearRelease: {
        type : Number,
    },
    reviews : [
        {
            userId : {
                type : ObjectId,
                required : true,
                unique : true,
                ref : "User"
            },
            body : {
                type : String,
                required : true,
            },
            data : {
                data : Date,
            },
            rate : {
                type : Number,
                default : 0,
            }
        }
    ],
})

export const Series = model("Series", SeriesSchema);
const SeriesPart = model("SeriesPart", SeriesPartSchema);

export default Series;