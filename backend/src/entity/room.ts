import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255, nullable: true})
    name: string;
    @Column({type:'longtext',  nullable: true})
    des: number;
}
