import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    showAllUser(): Promise<(import("./schema/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    showUserById(id: number): Promise<(import("./schema/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    makeAUser(UserDto: any): void;
    makeAPassHash(UserDto: any): void;
    changeAUser(UserDto: any, id: any): Promise<import("mongodb").UpdateResult>;
    deleteAllUser(): Promise<import("mongodb").DeleteResult>;
    deleteOneUser(id: any): Promise<import("./schema/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
