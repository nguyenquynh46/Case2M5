"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roomController_1 = __importDefault(require("../controller/roomController"));
const roomRouter = (0, express_1.Router)();
roomRouter.get('/', roomController_1.default.findAll);
roomRouter.get('/:id', roomController_1.default.findById);
roomRouter.post('', roomController_1.default.add);
roomRouter.put('/:id', roomController_1.default.update);
roomRouter.delete('/:id', roomController_1.default.delete);
exports.default = roomRouter;
//# sourceMappingURL=roomRouter.js.map