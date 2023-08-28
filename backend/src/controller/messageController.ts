import messageService from "../Service/messageService";

class MessageController{
    findAll = async (req,res)=>{
        let list = await messageService.getAllInOrder()
        res.json(list)
    }
    update = async (req, res) => {
        let data = await messageService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await messageService.delete(req.params.id);
        res.json(data)
    }
    add = async (req, res) => {
        let data = await messageService.add(req.body);
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await messageService.findById(req.params.id)
        res.json(data)
    }
}
export default new MessageController()
