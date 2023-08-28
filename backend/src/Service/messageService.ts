import {AppDataSource} from "../data-source";
import {Message} from "../entity/message";
class MessageService{
    private repository = AppDataSource.getRepository(Message)

    add = async (data)=>{
        return await this.repository.save(data)
    }
    delete = async (id) =>{
        return this.repository.delete(id)
    }
    getAll = async () => {
        return this.repository.find()
    }
    getAllInOrder = async () =>{
        return await this.repository.find({
            relations: {
                user: true,
                room:true
            }

        })
    }
    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    findById = async (id) => {
        return await this.repository.find({
            relations: {
                user: true,
                room:true
            },
            where: {
                room:{
                    id:id
                }
            }
        })
    }

}
export default new MessageService();