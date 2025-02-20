import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { fetchModules } from './fetchExternalApi';

export default async function moduleRoutesExt(server: FastifyInstance) {
	// Get all modules
	server.get('/get_modules', async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			const modules = await fetchModules();
			console.log(modules);
			return reply.send(modules);
		} catch (err) {
			reply.code(500).send(err);
		}
	});
}