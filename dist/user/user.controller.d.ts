import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    showAllUser(): {
        id: number;
        email: string;
        userName: string;
        password: string;
    }[];
    showUserById(id: number): {
        id: number;
        email: string;
        userName: string;
        password: string;
    };
    makeAUser(UserDto: any): void;
    changeAUser(UserDto: any, id: number): void;
    deleteAllUser(): {
        id: number;
        email: string;
        userName: string;
        password: string;
    }[];
    deleteOneUser(id: number): {
        id: number;
        email: string;
        userName: string;
        password: string;
    }[];
}
