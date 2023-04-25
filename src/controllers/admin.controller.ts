import { Request, Response } from "express";
import Admin from "../models/admin.model";
import { adminPasswordModifyValidator, adminRegisterValidator } from "../validators/admin.validator";
import bcrypt from 'bcryptjs';
import globalVars from "../constants/global-vars";
import jwt from 'jsonwebtoken';
import { adminLoginValidator } from "../validators/admin.validator";

export const index = async (req : Request, res : Response) => {
    try {
        const admins = await Admin.find();
        return res.status(200).json({
            success : true,
            messages : [
                "Admins have fetched successfully",
            ],
            data : admins.map((admin, index) => { 
                return { 
                    _id : admin._id,
                    index : index,
                    name : admin.name, 
                    email : admin.email,
                }})
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            messages : [
                "Something went wrong",
            ],
            data : []
        })
    }
}

export const register = async (req : Request, res : Response) : Promise<Response> => {
    const { error, value } = adminRegisterValidator(req.body);
    if (error) {
        return res.status(400).json({
            success : false,
            messages : error.details.map((item) => item.message),
            data : []
        })
    }

    try {
        const admin = await Admin.create({
            name : value.name,
            email : value.email,
            password : await bcrypt.hash(value.password, globalVars.passwordHashingSalt),
        })
        const payload = {
            _id : admin.id,
            name : admin.name,
            email : admin.email,
        }

        return res.status(201).json({
            success : true,
            messages : [
                "Admin has registered successfully"
            ],
            data : {
                token : jwt.sign(payload, globalVars.adminSecretKey),
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            messages : [
                "Something went wrong",
            ],
            data : []
        })
    }
}

export const login = async (req : Request, res : Response) : Promise<Response> => {
    const { error, value } = adminLoginValidator(req.body);
    if (error) {
        return res.status(400).json({
            success : false,
            messages : error.details.map((item) => item.message),
            data : [],
        })
    }

    try {
        const admin = await Admin.findOne({ email : value.email });
        if (!admin) {
            return res.status(404).json({
                success : false,
                messages : [
                    "wrong email address",
                ],
                data : [],
            })
        }
        if (!await bcrypt.compare(value.password, admin.password)) {
            return res.status(400).json({
                success : false,
                messages : [
                    "Password is not correct",
                ]
            })
        }
        const payload = {
            _id : admin._id,
            name : admin.name,
            email : admin.email,
        }

        return res.status(200).json({
            success : true,
            messages : [
                "You have logged in successfully",
            ],
            data : {
                token : jwt.sign(payload, globalVars.adminSecretKey)
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            messages : [
                "Something went wrong",
            ],
            data : []
        })
    }
}

export const changePassowrd = async (req : Request, res : Response) : Promise<Response> => {
    const { error, value } = adminPasswordModifyValidator(req.body);
    if (error) {
        return res.status(200).json({
            success : false,
            messages : error.details.map((item) => item.message),
            data : [],
        })
    }

    try {
        const admin = await Admin.findOne({ email : value.email });
        if (!admin) {
            return res.status(404).json({
                success : false,
                messages : [
                    "Email may not correct",
                ]
            })
        }
        if (!await bcrypt.compare(value.oldPassword, admin.password)) {
            return res.status(400).json({
                success : false,
                messages : [
                    "Password may not correct",
                ]
            })
        }
        admin.password = await bcrypt.hash(value.newPassword, globalVars.passwordHashingSalt);
        await admin.save()
        return res.status(200).json({
            success : true,
            messages : [
                "Password updated successfully",
            ],
            data : [],
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            messages : [
                "Something went wrong",
            ],
            data : []
        })
    }
}
