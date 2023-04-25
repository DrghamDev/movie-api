import { Router } from "express";
import { changePassowrd, index, login, register } from "../controllers/admin.controller";

const adminRouter = Router();

adminRouter.get("/", index);
adminRouter.post("/auth/register", register);
adminRouter.post('/auth/login', login);
adminRouter.patch('/auth/change-password', changePassowrd);

export default adminRouter