import {Router} from "express";
import userRoomController from "../controller/userRoomController";
const userRoomRouter = Router();
// homeRouter.use(auth)
userRoomRouter.get('/', userRoomController.findAll);
userRoomRouter.get('/:id',userRoomController.findById);
userRoomRouter.post('', userRoomController.add);
userRoomRouter.put('/:id', userRoomController.update);
userRoomRouter.delete('/:id',userRoomController.delete);
export default userRoomRouter;
