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
exports.default = moduleRoutesExt;
const fetchExternalApi_1 = require("./fetchExternalApi");
function moduleRoutesExt(server) {
    return __awaiter(this, void 0, void 0, function* () {
        // Get all modules
        server.get('/get_modules', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            try {
                const modules = yield (0, fetchExternalApi_1.fetchModules)();
                console.log(modules);
                return reply.send(modules);
            }
            catch (err) {
                reply.code(500).send(err);
            }
        }));
    });
}
