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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = usersRoutes;
const Users_1 = require("../models/Users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = 'test'; //changer et mettre dans le .env !!!!!
function usersRoutes(server) {
    return __awaiter(this, void 0, void 0, function* () {
        server.post('/signup', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = request.body;
                const existingUser = yield Users_1.Users.findOne({ username });
                if (existingUser) {
                    return reply.code(400).send({ error: 'User already exists' });
                }
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                const newUser = new Users_1.Users({ username, password: hashedPassword });
                yield newUser.save();
                reply.code(201).send({ message: 'User registered successfully' });
            }
            catch (err) {
                reply.code(500).send({ error: 'Server error', details: err });
            }
        }));
        server.post('/login', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = request.body;
                // Check if user exists
                const user = yield Users_1.Users.findOne({ username });
                if (!user) {
                    return reply.code(401).send({ error: 'Invalid email or password' });
                }
                // Compare passwords
                const isMatch = yield bcrypt_1.default.compare(password, user.password);
                if (!isMatch) {
                    return reply.code(401).send({ error: 'Invalid email or password' });
                }
                // Generate JWT Token
                const token = jsonwebtoken_1.default.sign({ userId: user._id, email: user.username }, SECRET_KEY, { expiresIn: '1h' });
                reply.send({ message: 'Login successful', token });
            }
            catch (err) {
                reply.code(500).send({ error: 'Server error', details: err });
            }
        }));
    });
}
