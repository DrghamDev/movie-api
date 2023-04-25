import { Request, Response } from "express";
import Category from "../models/category.model";
import { categoryValidator } from "../validators/category.validator";

export const index = async (req : Request, res : Response) : Promise<Response> => {
    try {
        const categories = await Category.find();
        return res.status(200).json({
            success : true,
            messages : [
                "Categories have fetched successfully",
            ],
            data : categories,
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

export const create = async (req : Request, res : Response) : Promise<Response> => {
    const { error, value } = categoryValidator(req.body);
    if (error) {
        return res.status(400).json({
            success : false,
            messages : error.details.map((item) => item.message),
            data : [],
        })
    }

    try {
        const category = await Category.create({
            name : value.name,
        })
        return res.status(201).json({
            success : true,
            messages : [
                "Category created successfully",
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

export const show = async (req : Request, res : Response) : Promise<Response> => {
    try {
        const category = await Category.findById(req.params.id);
        if (category) {
            return res.status(200).json({
                success : true,
                messages : [
                    "Category has fetched successfully"
                ],
                data : category,
            })
        }
        return res.status(404).json({
            success : false,
            messages : [
                "Category id may not found",
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

export const update = async (req : Request, res : Response) : Promise<Response> => {
    const { error, value } = categoryValidator(req.body);
    if (error) {
        return res.status(200).json({
            success : false,
            messages : error.details.map((item) => item.message),
            data : [],
        })
    }

    try {
        const category = await Category.findByIdAndUpdate(req.params.id, { name : value.name });
        if (category) {
            return res.status(200).json({
                success : true,
                messages : [
                    "Category has updated successfully"
                ],
                data : category,
            })
        }
        return res.status(404).json({
            success : false,
            messages : [
                "Category id may not found",
            ],
            data : []
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

export const destory = async (req : Request, res : Response) : Promise<Response> => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (category) {
            return res.status(200).json({
                success : true,
                messages : [
                    "Category has deleted successfully"
                ],
                data : category,
            })
        }
        return res.status(404).json({
            success : false,
            messages : [
                "Category id may not found",
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