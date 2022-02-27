"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const common_1 = require("@nestjs/common");
let validateUser = class validateUser {
    use(req) {
        const { authorization } = req.headers;
        if (!authorization)
            throw new common_1.HttpException("No Token is Provided", common_1.HttpStatus.BAD_REQUEST);
        else
            throw new common_1.HttpException("Token is Provided", common_1.HttpStatus.OK);
    }
};
validateUser = __decorate([
    (0, common_1.Injectable)()
], validateUser);
exports.validateUser = validateUser;
//# sourceMappingURL=authenticate.middleare.js.map