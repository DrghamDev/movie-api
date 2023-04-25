import { Request, Response } from "express";
import User from "../models/user.model";

export const index = async (req : Request, res : Response) : Promise<Response> => {
    try {
        const users = await User.find();
        return res.status(200).json({
            success : true,
            messages : [
                "User has fetched successfully",
            ],
            data : users,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            messages : [
                "Something went wrong",
            ],
            data : [],
        })
    }
}

export const show = async (req : Request, res : Response) : Promise<Response> => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            return res.status(200).json({
                success : true,
                messages : [
                    "User has fetched successfully",
                ],
                data : user,
            })
        }
        return res.status(404).json({
            success : false,
            messages : [
                "User may not found",
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
            data : [],
        })
    }
}