import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {SECRET} from "../middleware/jwt";

export class UserService {
    private repository;

    constructor() {
        this.repository = AppDataSource.getRepository(User)
    }

    register = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.repository.save(user);
    }


    checkUser = async (user) => {
        let userFind = await this.repository.findOneBy({username: user.username});
        if (!userFind) {
            return 'User is not exist'
        } else {
            let passWordCompare =  await bcrypt.compare(user.password, userFind.password);
            console.log(passWordCompare)
            if (passWordCompare) {
                let payload = {
                    idUser: userFind.id,
                    username: userFind.username,
                    role: 'admin'
                }
                return {
                    token: jwt.sign(payload, SECRET, {
                        expiresIn: 36000 * 10 * 100
                    }),
                    idUser: userFind.id,
                    username: userFind.username,
                    role: userFind.role,
                    image:userFind.image,
                    status:userFind.status
                }
            } else {
                return 'Password is wrong'
            }
        }
    }
}
export default new UserService()