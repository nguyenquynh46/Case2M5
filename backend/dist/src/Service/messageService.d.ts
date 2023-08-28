import { Message } from "../entity/message";
declare class MessageService {
    private repository;
    add: (data: any) => Promise<any>;
    delete: (id: any) => Promise<import("typeorm").DeleteResult>;
    getAll: () => Promise<Message[]>;
    getAllInOrder: () => Promise<Message[]>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findById: (id: any) => Promise<Message[]>;
}
declare const _default: MessageService;
export default _default;
