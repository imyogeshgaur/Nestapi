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
    makeAUser(UserDto: any): Promise<import("./schema/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    changeAUser(UserDto: any, id: any): Promise<import("./schema/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deleteAllUser(): Promise<any>;
    deleteOneUser(id: any): Promise<import("./schema/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
