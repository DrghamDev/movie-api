import { Request, Response, Router } from "express";
import UserRouter from "./user.router";
import CategoryRouter from "./category.router";
import adminRouter from "./admin.router";

const mainRouter = Router();

mainRouter.get('/', (req : Request, res : Response) => {
    return res.status(200).json({
        message : "Welcome to my website",
    })
})

mainRouter.use("/users", UserRouter);
mainRouter.use("/categories", CategoryRouter)
mainRouter.use('/admins', adminRouter);

export default mainRouter;