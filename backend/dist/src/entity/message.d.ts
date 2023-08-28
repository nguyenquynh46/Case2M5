import { User } from "./user";
import { Room } from "./room";
export declare class Message {
    id: number;
    content: string;
    user: User;
    room: Room;
}
