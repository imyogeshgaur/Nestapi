"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    showAllUser() {
        try {
            return this.userService.getAllUser();
        }
        catch (error) {
            throw new common_1.HttpException("Cannot Get User !!!", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    showUserById(id) {
        try {
            return this.userService.getUserById(id);
        }
        catch (error) {
            throw new common_1.HttpException("Cannot Get User !!!", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    makeAUser(UserDto) {
        try {
            this.userService.createUser(UserDto);
        }
        catch (error) {
            throw new common_1.HttpException("Cannot Create  User !!!", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    makeAPassHash(UserDto) {
        try {
            this.userService.createUserPassHash(UserDto);
        }
        catch (error) {
            throw new common_1.HttpException("Cannot Create  User !!!", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    changeAUser(UserDto, id) {
        try {
            return this.userService.updateUser(id, UserDto);
        }
        catch (error) {
            throw new common_1.HttpException("Cannot Update User !!!", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteAllUser() {
        try {
            return this.userService.deleteAllUser();
        }
        catch (error) {
            throw new common_1.HttpException("Cannot Get User !!!", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    deleteOneUser(id) {
        try {
            return this.userService.deleteOneUser(id);
        }
        catch (error) {
            throw new common_1.HttpException("Cannot Get User !!!", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "showAllUser", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "showUserById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "makeAUser", null);
__decorate([
    (0, common_1.Post)("/hash"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "makeAPassHash", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "changeAUser", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteAllUser", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteOneUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map