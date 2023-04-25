import { Router } from "express";
import { index, show } from "../controllers/user.controller";

const UserRouter = Router();

UserRouter.get('/', index);
UserRouter.get('/:id', show);

export default UserRouter;
