import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Armor } from '../models/Armor';

export default async function armorRoutes(server: FastifyInstance) {
	// Create a new character
	server.post('/create_armor', async (request: FastifyRequest, reply: FastifyReply) => {
		const armor = new Armor(request.body);
		try {
			await armor.save();
			reply.code(201).send(armor);
		} catch (err) {
			reply.code(400).send(err);
		}
	});

	// Get all armors
	server.get('/get_armors', async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			const armors = await Armor.find();
			reply.send(armors);
		} catch (err) {
			reply.code(500).send(err);
		}
	});
}