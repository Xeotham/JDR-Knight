import fastify from 'fastify';
import mongoose from 'mongoose';
import cors from '@fastify/cors';
import dotenv from 'dotenv';

import characterRoutes from "../routes/characterRoutes";
import armorRoutes from "../routes/armorRoutes";
import moduleRoutes from '../routes/moduleRoutes';
import weaponRoutes from "../routes/weaponRoutes";

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
// Root route

server.get('/', async (request, reply) => {
	return { message: 'Welcome to Knight TTRPG' };
});

server.register(characterRoutes, { prefix: '/api' });
server.register(weaponRoutes, { prefix: '/api' });
server.register(armorRoutes, { prefix: '/api' });
server.register(moduleRoutes, { prefix: '/api' });

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
