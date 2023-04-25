import { Request, Response } from "express";
import Movie from "../models/movie.model";

export const index = async (req : Request, res : Response) : Promise<Response> => {
    try {
        const movies = await Movie.find();
        return res.status(200).json({
            success : true,
            messages : [
                "Movies fetched successfully",
            ],
            data : movies,
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

// export const create = async (req  : Request, res : Response) : Promise<Response> => {
    
// }