"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
var createUser_1 = __importDefault(require("./services/createUser"));
function users(request, response) {
    var user = createUser_1.default({
        name: 'Amauri',
        email: 'amauri@gmail.com',
        password: 12345,
        techs: ['JS', 'C#'],
        experience: { backend: true, frontend: false }
    });
    return response.json({ usuario: user });
}
exports.users = users;
