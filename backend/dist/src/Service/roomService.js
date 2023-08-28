"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const typeorm_1 = require("typeorm");
const room_1 = require("../entity/room");
class RoomService {
    constructor() {
        this.findAll = async () => {
            return await this.repository.find();
        };
        this.add = async (car) => {
            return await this.repository.save(car);
        };
        this.update = async (id, car) => {
            return await this.repository.update(id, car);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.findById = async (id) => {
            return await this.repository.find({
                where: {
                    id: id
                }
            });
        };
        this.findByName = async (name) => {
            return await this.repository.find({
                where: {
                    name: (0, typeorm_1.Like)(`%${name}%`)
                }
            });
        };
        this.repository = data_source_1.AppDataSource.getRepository(room_1.Room);
    }
}
exports.default = new RoomService();
//# sourceMappingURL=roomService.js.map