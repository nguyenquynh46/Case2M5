import userRoomService from "../Service/userRoomService";

class UserRoomController{
    findAll = async (req,res)=>{
        let list = await userRoomService.findAll()
        res.json(list)
    }
    update = async (req, res) => {
        let data = await userRoomService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await userRoomService.delete(req.params.id);
        res.json(data)
    }
    add = async (req, res) => {
        let data = await userRoomService.add(req.body);
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await userRoomService.findByUser(req.params.id)
        console.log(data)
        res.json(data)
    }
}
export default new UserRoomController()
