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
exports.default = weaponRoutes;
const Weapon_1 = require("../models/Weapon");
function weaponRoutes(server) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a new character
        server.post('/create_weapon', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const weapon = new Weapon_1.Weapon(request.body);
            try {
                yield weapon.save();
                reply.code(201).send(weapon);
            }
            catch (err) {
                reply.code(400).send(err);
            }
        }));
        // Get all weapons
        server.get('/get_weapons', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            try {
                const weapons = yield Weapon_1.Weapon.find();
                reply.send(weapons);
            }
            catch (err) {
                reply.code(500).send(err);
            }
        }));
    });
}
