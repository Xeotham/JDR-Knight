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
const fastify_1 = __importDefault(require("fastify"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const static_1 = __importDefault(require("@fastify/static"));
const characterRoutes_1 = __importDefault(require("../routes/characterRoutes"));
const armorRoutes_1 = __importDefault(require("../routes/armorRoutes"));
const moduleRoutes_1 = __importDefault(require("../routes/moduleRoutes"));
const weaponRoutes_1 = __importDefault(require("../routes/weaponRoutes"));
const modulesRoutes_1 = __importDefault(require("../external-api/modulesRoutes"));
const usersRoutes_1 = __importDefault(require("../routes/usersRoutes"));
dotenv_1.default.config();
const server = (0, fastify_1.default)({ logger: true });
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
// Register CORS plugin
server.register(cors_1.default, {
    origin: '*', // Allow all origins (update for production)
    methods: ['GET', 'POST', 'PUT', 'DELETE']
});
// Register fastify-static to serve static files
server.register(static_1.default, {
    root: path_1.default.join(process.cwd(), 'public'), // Path to the directory containing your static files
    prefix: '/', // Serve files under the root URL
});
// Root route
server.get('/', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return reply.sendFile('index.html');
}));
server.get('/auth.js', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = path_1.default.join(__dirname, '../middlewares/auth.js');
    try {
        const fileStream = fs_1.default.createReadStream(filePath);
        reply.header('Content-Type', 'application/javascript');
        return reply.send(fileStream);
    }
    catch (err) {
        reply.code(500).send({ error: 'Cannot load auth.js' });
    }
}));
server.register(modulesRoutes_1.default, { prefix: '/external-api' });
server.register(characterRoutes_1.default, { prefix: '/' });
server.register(weaponRoutes_1.default, { prefix: '/' });
server.register(armorRoutes_1.default, { prefix: '/' });
server.register(moduleRoutes_1.default, { prefix: '/' });
server.register(usersRoutes_1.default, { prefix: '/' });
// Start the server
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server.listen({ port: parseInt(process.env.PORT) || 3000 });
        const address = server.server.address();
        const port = typeof address === 'string' ? address : address === null || address === void 0 ? void 0 : address.port;
        console.log(`Server running on http://localhost:${port}`);
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
});
start();
