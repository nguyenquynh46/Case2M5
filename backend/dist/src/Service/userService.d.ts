export declare class UserService {
    private repository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"User is not exist" | "Password is wrong" | {
        token: any;
        idUser: any;
        username: any;
        role: any;
        image: any;
        status: any;
    }>;
}
declare const _default: UserService;
export default _default;
