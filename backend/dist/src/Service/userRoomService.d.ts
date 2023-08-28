import { UserRoom } from "../entity/userRoom";
declare class UserRoomService {
    private repository;
    add: (data: any) => Promise<any>;
    delete: (id: any) => Promise<import("typeorm").DeleteResult>;
    findAll: () => Promise<UserRoom[]>;
    findById: (id: any) => Promise<UserRoom[]>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findByUser: (id: any) => Promise<UserRoom[]>;
}
declare const _default: UserRoomService;
export default _default;
