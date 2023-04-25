import { Schema, model } from "mongoose";

const ActorSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    description : {
        type : String,
    },
    image : {
        type : String,
    },
    gender : {
        type : String,
        enum : ["male", "female", "other"],
        default : "male",
    },
    birthDate : {
        type : Date,
    }
}, { timestamps : true })

const Actor = model("Actor", ActorSchema);

export default Actor;