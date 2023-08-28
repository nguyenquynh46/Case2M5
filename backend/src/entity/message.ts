import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user"
import {Room} from "./room";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    content: string;
    @ManyToOne(()=>User,(user)=>user.id)
    user: User
    @ManyToOne(()=>Room,(room)=>room.id)
    room: Room
}
