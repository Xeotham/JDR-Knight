import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Weapon } from '../models/Weapon';

export default async function weaponRoutes(server: FastifyInstance) {
	// Create a new character
	server.post('/create_weapon', async (request: FastifyRequest, reply: FastifyReply) => {
		const weapon = new Weapon(request.body);
		try {
			await weapon.save();
			reply.code(201).send(weapon);
		} catch (err) {
			reply.code(400).send(err);
		}
	});

	// Get all weapons
	server.get('/get_weapons', async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			const weapons = await Weapon.find();
			reply.send(weapons);
		} catch (err) {
			reply.code(500).send(err);
		}
	});
}