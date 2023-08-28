import {Router} from "express";
import messageController from "../controller/messageController";
const messageRouter = Router();
// homeRouter.use(auth)
messageRouter.get('/', messageController.findAll);
messageRouter.get('/:id', messageController.findById);
messageRouter.post('',  messageController.add);
messageRouter.put('/:id',  messageController.update);
messageRouter.delete('/:id', messageController.delete);
export default messageRouter;