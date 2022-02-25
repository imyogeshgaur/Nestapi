"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.users = [
            {
                id: 1,
                email: "lorem@gmail.com",
                userName: "lorem345",
                password: "12345"
            },
            {
                id: 2,
                email: "borem@gmail.com",
                userName: "borem3450",
                password: "123495"
            },
            {
                id: 3,
                email: "torem@gmail.com",
                userName: "lorem345",
                password: "123485"
            },
        ];
    }
    getUser() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find((user) => user.id === id);
    }
    createAUser(UserDto) {
        this.users.push(UserDto);
    }
    updateAUser(id, UserDto) {
        const targetUser = this.users.find((user) => user.id === id);
        targetUser.email = UserDto.email;
        targetUser.userName = UserDto.userName;
        targetUser.password = UserDto.password;
        this.users.push(targetUser);
    }
    removeUsers() {
        this.users = [];
        return this.users;
    }
    removeUserById(id) {
        return this.users.filter((user) => { return user.id != id; });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map