"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoomController_1 = __importDefault(require("../controller/userRoomController"));
const userRoomRouter = (0, express_1.Router)();
userRoomRouter.get('/', userRoomController_1.default.findAll);
userRoomRouter.get('/:id', userRoomController_1.default.findById);
userRoomRouter.post('', userRoomController_1.default.add);
userRoomRouter.put('/:id', userRoomController_1.default.update);
userRoomRouter.delete('/:id', userRoomController_1.default.delete);
exports.default = userRoomRouter;
//# sourceMappingURL=userRoomRouter.js.map