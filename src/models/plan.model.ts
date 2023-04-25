import { Schema, model } from "mongoose";

const PlanSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    description : {
        type : String,
    },
    price : {
        type : Number,
        required : true,
    },
}, { timestamps : true })

const Plan = model("Plan", PlanSchema);

export default Plan;