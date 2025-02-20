"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = characterRoutes;
const Character_1 = require("../models/Character");
function characterRoutes(server) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a new character
        server.post('/characters', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const character = new Character_1.Character(request.body);
            try {
                yield character.save();
                reply.code(201).send(character);
            }
            catch (err) {
                reply.code(400).send(err);
            }
        }));
        // Get all characters
        server.get('/characters', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            try {
                const characters = yield Character_1.Character.find().populate('weapons armor modules');
                reply.send(characters);
            }
            catch (err) {
                reply.code(500).send(err);
            }
        }));
    });
}
