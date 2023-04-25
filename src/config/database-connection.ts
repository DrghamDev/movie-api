import mongoose from "mongoose"

const connectToDatabase = async () : Promise<void> => {
    try {
        await mongoose.connect("mongodb://localhost:27017/movies-website")
        console.log("Connected to the database")
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;