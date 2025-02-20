import fastify from 'fastify';
import mongoose from 'mongoose';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import path	from 'path';
import fs from 'fs';
import fastifyStatic from '@fastify/static';

import characterRoutes from "../routes/characterRoutes";
import armorRoutes from "../routes/armorRoutes";
import moduleRoutes from '../routes/moduleRoutes';
import weaponRoutes from "../routes/weaponRoutes";
import moduleRoutesExt from "../external-api/modulesRoutes";
import usersRoutes from '../routes/usersRoutes';

dotenv.config();

const server = fastify({ logger: true });
// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI!)
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.error('Could not connect to MongoDB', err));
// Register CORS plugin

server.register(cors, {
	origin: '*', // Allow all origins (update for production)
	methods: ['GET', 'POST', 'PUT', 'DELETE']
});

// Register fastify-static to serve static files
server.register(fastifyStatic, {
	root: path.join(process.cwd(), 'public'), // Path to the directory containing your static files
	prefix: '/', // Serve files under the root URL
});

// Root route

server.get('/', async (request, reply) => {
	return reply.sendFile('index.html');
});

server.get('/auth.js', async (request, reply) => {
    const filePath = path.join(__dirname, '../middlewares/auth.js');
    try {
        const fileStream = fs.createReadStream(filePath);
        reply.header('Content-Type', 'application/javascript');
        return reply.send(fileStream);
    } catch (err) {
        reply.code(500).send({ error: 'Cannot load auth.js' });
    }
});

server.register(moduleRoutesExt, { prefix: '/external-api'})
server.register(characterRoutes, { prefix: '/' });
server.register(weaponRoutes, { prefix: '/' });
server.register(armorRoutes, { prefix: '/' });
server.register(moduleRoutes, { prefix: '/' });
server.register(usersRoutes, {prefix : '/'});	

// Start the server
const start = async () => {
	try {
		await server.listen({ port: parseInt(process.env.PORT!) || 3000 });
		const address = server.server.address();
		const port = typeof address === 'string' ? address : address?.port;
		console.log(`Server running on http://localhost:${port}`);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};

start();
