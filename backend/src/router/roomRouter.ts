
import {Router} from "express";
import roomController from "../controller/roomController";


const roomRouter = Router();
// homeRouter.use(auth)
roomRouter.get('/', roomController.findAll);
roomRouter.get('/:id',roomController.findById);
roomRouter.post('', roomController.add);
roomRouter.put('/:id', roomController.update);
roomRouter.delete('/:id', roomController.delete);
export default roomRouter;
