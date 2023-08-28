"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messageController_1 = __importDefault(require("../controller/messageController"));
const messageRouter = (0, express_1.Router)();
messageRouter.get('/', messageController_1.default.findAll);
messageRouter.get('/:id', messageController_1.default.findById);
messageRouter.post('', messageController_1.default.add);
messageRouter.put('/:id', messageController_1.default.update);
messageRouter.delete('/:id', messageController_1.default.delete);
exports.default = messageRouter;
//# sourceMappingURL=messageRouter.js.map