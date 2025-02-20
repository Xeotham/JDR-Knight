import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Modules } from '../models/Modules';

export default async function moduleRoutes(server: FastifyInstance) {
	// Create a new character
	server.post('/create_module', async (request: FastifyRequest, reply: FastifyReply) => {
		const module = new Modules(request.body);
		try {
			await module.save();
			reply.code(201).send(module);
		} catch (err) {
			reply.code(400).send(err);
		}
	});

	// Get all modules
	server.get('/get_modules', async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			const modules = await Modules.find();
			reply.send(modules);
		} catch (err) {
			reply.code(500).send(err);
		}
	});
}