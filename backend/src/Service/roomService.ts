
import {AppDataSource} from "../data-source";
import {Between, Like} from "typeorm";
import {Room} from "../entity/room";

 class RoomService{
    private repository
    constructor() {
        this.repository = AppDataSource.getRepository(Room);
    }
    findAll=async ()=>{
        return   await  this.repository.find()
    }
    add = async (car) => {
        return await this.repository.save(car)
    }
    update = async (id, car) => {
        return await this.repository.update(id, car)
    }
    delete = async (id) => {
        return await this.repository.delete(id)
    }
    findById = async (id) => {
        return await this.repository.find({
            where: {
                id : id
            }
        })
    }
    findByName = async (name) => {
        return await this.repository.find({
            where: {
                name: Like(`%${name}%`)
            }
        })
    }
}
export default new RoomService()