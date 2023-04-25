import Joi, { ValidationResult } from 'joi';

const AdminRegisterSchema = Joi.object().keys({
    name : Joi.string().required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(8).required(),
})

const AdminLoginSchema = Joi.object().keys({
    email : Joi.string().email().required(),
    password : Joi.string().min(0).required(),
})

const AdminPasswordModificationSchema = Joi.object().keys({
    email : Joi.string().email().required(),
    oldPassword : Joi.string().min(8).required(),
    newPassword : Joi.string().min(8).required(),
});

type adminRegisterValidatorType = {
    name : string;
    email : string;
    password : string;
}

type adminLoginValidatorType = {
    email : string;
    password : string;
}

type adminPasswordModifyType = {
    email : string;
    oldPassword : string;
    newPassword : string;
}

export const adminRegisterValidator = (data : adminRegisterValidatorType) : ValidationResult => {
    return AdminRegisterSchema.validate(data, { abortEarly : false });
}

export const adminLoginValidator = (data : adminLoginValidatorType) : ValidationResult => {
    return AdminLoginSchema.validate(data, { abortEarly : false });
}

export const adminPasswordModifyValidator = (data : adminPasswordModifyType) : ValidationResult => {
    return AdminPasswordModificationSchema.validate(data, { abortEarly : false });
}