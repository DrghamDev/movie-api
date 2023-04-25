import Joi, { ValidationResult } from 'joi';

const CategorySchema = Joi.object().keys({
    name : Joi.string().required(),
})

type categoryValidatorType = {
    name : string;
}

export const categoryValidator = (data : categoryValidatorType) : ValidationResult => {
    return CategorySchema.validate(data);
}