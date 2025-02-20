import { Schema, model, Document } from 'mongoose';

interface	IAspect {
	name:	string;
	value:	number;
}

interface	IOverdrives {
	description:	string;
	obtained:		boolean;
}

interface	ICarac {
	name:	string;
	value:	number;
	od:		IOverdrives[];
}

interface	IStats {
	aspect:		IAspect;
	carac:		ICarac[];
}

interface ICharacter extends Document {
	name:			string;
	description:	string;
	weapons:		Schema.Types.ObjectId[];
	modules:		Schema.Types.ObjectId[];
	armor:			Schema.Types.ObjectId;
	stats:			IStats;
	created_at:		Date;
}

const characterSchema = new Schema<ICharacter>({
	name:			{ type: String, required: true },
	description:	{ type: String },
	weapons:		[{ type: Schema.Types.ObjectId, ref: 'Weapon' }],
	modules:		[{ type: Schema.Types.ObjectId, ref: 'Module' }],
	armor:			{ type: Schema.Types.ObjectId, ref: 'Armor' },
	stats:			[{
		aspect:	{
			name:	String,
			value:	Number,
		},
		carac:	[{
			name:	String,
			value:	Number,
			od:		[{
				description:	String,
				obtained:		Boolean,
			}],
		}],
	}],
	created_at: { type: Date, default: Date.now }
});

export const Character = model<ICharacter>('Character', characterSchema);