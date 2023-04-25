import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
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
    movieSeriesId : {
        type : ObjectId,
        ref : "MovieSeries",
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
}, { timestamps : true })

const Movie = model("Movie", MovieSchema);

export default Movie;