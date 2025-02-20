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
exports.default = armorRoutes;
const Armor_1 = require("../models/Armor");
function armorRoutes(server) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a new character
        server.post('/create_armor', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const armor = new Armor_1.Armor(request.body);
            try {
                yield armor.save();
                reply.code(201).send(armor);
            }
            catch (err) {
                reply.code(400).send(err);
            }
        }));
        // Get all armors
        server.get('/get_armors', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            try {
                const armors = yield Armor_1.Armor.find();
                reply.send(armors);
            }
            catch (err) {
                reply.code(500).send(err);
            }
        }));
    });
}
