import {Schema, model, Document, Types} from 'mongoose';

interface	ICategory {
	id:		number;
	name:	string;
}

interface	INpc {
	name:			string;
	defence:		number;
	reaction:		number;
	initiative:		number;
	health:			number;
	energy:			number;
	armour:			number;
	force_field:	number;
	cohesion:		number;
	outbreak:		number;
	speed:			number;
}

interface	ILevel {
	level:			number;
	description:	string;
	rarity:			string;
	cost:			number;
	activation:		string;
	duration:		string;
	damage_dice:	number;
	damage_bonus:	number;
	violence_dice:	number;
	violence_bonus:	number;
	reach:			string | null;
	energy:			number;
	effects:		string[];
	npcs:			INpc[];
}

interface	ISlots {
	head:		number;
	left_arm:	number;
	right_arm:	number;
	torso:		number;
	left_leg:	number;
	right_leg:	number;
}

interface	IModules extends Document {
	name:			string;
	category:		ICategory;
	levels:			ILevel[];
	slots:			ISlots[];
}

const modulesSchema = new Schema<IModules>({
	name:			{ type: String, required: true },
	category:		{
		id:		{ type: Number, required: true },
		name:	{ type: String, required: true },
	},
	levels:			[{
		level:			{ type: Number },
		description:	{ type: String },
		rarity:			{ type: String },
		cost:			{ type: Number },
		activation: 	{ type: String },
		duration: 		{ type: String },
		damage_dice: 	{ type: Number },
		damage_bonus: 	{ type: Number },
		violence_dice: 	{ type: Number },
		violence_bonus: { type: Number },
		reach: 			{ type: String },
		energy: 		{ type: Number },
		effects: 		[{ type: String },],
		npcs: 			[{
			name:			{ type: String },
			defence:		{ type: Number },
			reaction:		{ type: Number },
			initiative:		{ type: Number },
			health:			{ type: Number },
			energy:			{ type: Number },
			armour:			{ type: Number },
			force_field:	{ type: Number },
			cohesion:		{ type: Number },
			outbreak:		{ type: Number },
			speed:			{ type: Number },
		}],
	}],
	slots:			[{
		head:		{ type: Number },
		left_arm:	{ type: Number },
		right_arm:	{ type: Number },
		torso:		{ type: Number },
		left_leg:	{ type: Number },
		right_leg:	{ type: Number },
	}]
});

export const Modules = model<IModules>('Modules', modulesSchema);