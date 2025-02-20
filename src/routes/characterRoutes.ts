import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Character } from '../models/Character';

export default async function characterRoutes(server: FastifyInstance) {
	// Create a new character
	server.post('/characters', async (request: FastifyRequest, reply: FastifyReply) => {
		const character = new Character(request.body);
		try {
			await character.save();
			reply.code(201).send(character);
		} catch (err) {
			reply.code(400).send(err);
		}
	});

	// Get all characters
	server.get('/characters', async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			const characters = await Character.find().populate('weapons armor modules');
			reply.send(characters);
		} catch (err) {
			reply.code(500).send(err);
		}
	});
}