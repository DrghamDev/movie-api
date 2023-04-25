import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const MovieSeriesSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    description : {
        type : String,
    },
    ended : {
        type : Boolean,
        default : true,
    },
    moviesIds : [
        {
            type : ObjectId,
            ref : 'Movie',
        }
    ]
});

const MovieSeries = model("MovieSeries", MovieSeriesSchema);

export default MovieSeries;