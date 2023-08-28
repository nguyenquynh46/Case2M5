import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user"
import {Room} from "./room";
@Entity()
export class UserRoom {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=>User,(user)=>user.id)
    user: User
    @ManyToOne(()=>Room,(room)=>room.id)
    room: Room
}
