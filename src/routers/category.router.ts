import { Router } from "express";
import { index, show, update, destory, create } from "../controllers/category.controller";

const CategoryRouter = Router();
CategoryRouter.get('/', index);
CategoryRouter.post('/', create);
CategoryRouter.get('/:id', show);
CategoryRouter.put('/:id', update);
CategoryRouter.delete('/:id', destory);

export default CategoryRouter;
