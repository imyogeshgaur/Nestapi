"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.default.Schema({
    id: Number,
    email: String,
    userName: String,
    password: String
});
class User {
}
exports.User = User;
//# sourceMappingURL=user.schema.js.map