import { Schema, model, Document } from 'mongoose';

interface IUsers extends Document {
	username:		string;
	password:		string;
}

const usersSchema = new Schema<IUsers>({
	username: { type: String, required: true },
	password: { type: String, required: true },
});

export const Users = model<IUsers>('Users', usersSchema);