
import {AppDataSource} from "../data-source";
import {UserRoom} from "../entity/userRoom";
class UserRoomService  {
    private repository = AppDataSource.getRepository(UserRoom)
    add = async (data) => {
        return await this.repository.save(data)
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    findAll = async () => {
        return await this.repository.find({
            relations: {
                user: true,
                room:true
            }
        });
    }

    findById = async (id) => {
        return await this.repository.find({

            relations: {
                user: true,
                room:true
            },
            where: {
                id: id
            }

        })
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    findByUser = async (id) => {
        return await this.repository.find({
            relations: {
                user: true,
                room:true
            },
            where: {
               user:{
                   id:id
               }
            }
        })
    }

}

export default new UserRoomService()