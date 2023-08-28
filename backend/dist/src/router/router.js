"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const roomRouter_1 = __importDefault(require("./roomRouter"));
const messageRouter_1 = __importDefault(require("./messageRouter"));
const userRoomRouter_1 = __importDefault(require("./userRoomRouter"));
const router = (0, express_1.Router)();
router.use("/messages", messageRouter_1.default);
router.use("/userRooms", userRoomRouter_1.default);
router.use('/rooms', roomRouter_1.default);
router.use('/', userRouter_1.userRouter);
exports.default = router;
//# sourceMappingURL=router.js.map