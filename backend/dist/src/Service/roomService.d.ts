declare class RoomService {
    private repository;
    constructor();
    findAll: () => Promise<any>;
    add: (car: any) => Promise<any>;
    update: (id: any, car: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByName: (name: any) => Promise<any>;
}
declare const _default: RoomService;
export default _default;
