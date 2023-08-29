import {Router} from "express";
import userController from "../controller/userController";
import roomController from "../controller/roomController";
import roomRouter from "./roomRouter";
export const userRouter = Router();
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.put('/users/:id', userController.update);
userRouter.get('/users', userController.findAll);
