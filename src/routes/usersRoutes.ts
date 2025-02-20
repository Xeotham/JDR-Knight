import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Users } from '../models/Users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'test'; //changer et mettre dans le .env !!!!!

export default async function usersRoutes(server: FastifyInstance)
{
    server.post('/signup', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
          const { username, password } = request.body as { username: string; password: string };
          const existingUser = await Users.findOne({ username });
          if (existingUser) {
            return reply.code(400).send({ error: 'User already exists' });
          }
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = new Users({ username, password: hashedPassword });
          await newUser.save();
          reply.code(201).send({ message: 'User registered successfully' });
        } catch (err) {
          reply.code(500).send({ error: 'Server error', details: err });
        }
      });
      server.post('/login', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
        const { username, password } = request.body as { username: string; password: string };
    
        // Check if user exists
        const user = await Users.findOne({ username });
        if (!user) {
            return reply.code(401).send({ error: 'Invalid email or password' });
        }
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return reply.code(401).send({ error: 'Invalid email or password' });
        }
    
        // Generate JWT Token
        const token = jwt.sign({ userId: user._id, email: user.username }, SECRET_KEY, { expiresIn: '1h' });
        reply.send({ message: 'Login successful', token });
        } catch (err) {
          reply.code(500).send({ error: 'Server error', details: err });
        }
      });
}