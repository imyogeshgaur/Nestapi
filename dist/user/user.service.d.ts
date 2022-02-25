export declare class UserService {
    users: {
        id: number;
        email: string;
        userName: string;
        password: string;
    }[];
    getUser(): {
        id: number;
        email: string;
        userName: string;
        password: string;
    }[];
    getUserById(id: Number): {
        id: number;
        email: string;
        userName: string;
        password: string;
    };
    createAUser(UserDto: any): void;
    updateAUser(id: number, UserDto: any): void;
    removeUsers(): {
        id: number;
        email: string;
        userName: string;
        password: string;
    }[];
    removeUserById(id: number): {
        id: number;
        email: string;
        userName: string;
        password: string;
    }[];
}
