"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const userRoom_1 = require("../entity/userRoom");
class UserRoomService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(userRoom_1.UserRoom);
        this.add = async (data) => {
            return await this.repository.save(data);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.findAll = async () => {
            return await this.repository.find({
                relations: {
                    user: true,
                    room: true
                }
            });
        };
        this.findById = async (id) => {
            return await this.repository.find({
                relations: {
                    user: true,
                    room: true
                },
                where: {
                    id: id
                }
            });
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.findByUser = async (id) => {
            return await this.repository.find({
                relations: {
                    user: true,
                    room: true
                },
                where: {
                    user: {
                        id: id
                    }
                }
            });
        };
    }
}
exports.default = new UserRoomService();
//# sourceMappingURL=userRoomService.js.map