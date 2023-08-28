import {Router} from "express";
import {userRouter} from "./userRouter";
import roomRouter from "./roomRouter";
import messageRouter from "./messageRouter";
import userRoomRouter from "./userRoomRouter";
const router = Router();
router.use("/messages", messageRouter)
router.use("/userRooms", userRoomRouter)
router.use('/rooms', roomRouter)
router.use('/', userRouter)
export default router;