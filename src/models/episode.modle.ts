import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const EpisodeSchema = new Schema({
    title : {
        type : String,
    },
    number : {
        type : Number,
    },
    seriesId : {
        type : ObjectId,
        ref : "Series",
    },
    seriesPartId : {
        type : ObjectId,
        ref : "SeriesPart"
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

const Episode = model("Episode", EpisodeSchema);

export default Episode;