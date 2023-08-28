
import roomService from "../Service/roomService";
export class RoomController {
    private roomService;
    constructor() {
        this.roomService = roomService ;
    }
    findAll=async (req,res)=>{
        let list
        if(req.query.name){
            list = await this.roomService.findByName(req.query.name)
        }
        else {
            list = await  this.roomService.findAll()
        }
        res.json(list)
    }
    add = async (req, res) => {
        let data = await this.roomService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await this.roomService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.roomService.delete(req.params.id);
        res.json(data)
    }
    findByName = async (req, res) => {
        let data = await this.roomService.findByName(req.query.name);
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await this.roomService.findById(req.params.id);
        res.json(data)
    }

}
export default new RoomController()