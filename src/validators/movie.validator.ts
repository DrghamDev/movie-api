import Joi from "joi";
import { isValidObjectId } from "mongoose";

const  MovieSchema = Joi.object().keys({
    name : Joi.string().required(),
    description: Joi.string().min(12),
    accessType : Joi.string().valid("free", "purchase", "plane").default("free"),
    planId : Joi.string().custom((value, helpers) => { 
        if (isValidObjectId(value)) {
            return value;
        } else {
            throw new Error("Unvalid object id")
        }
    }),
    // categories 
})