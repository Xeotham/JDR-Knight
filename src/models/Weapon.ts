import { Schema, model, Document } from 'mongoose';

interface	ICategory {
	id:		number;
	name:	string;
}

interface	IEnhancement {
	id:		number;
	name:	string;
}

interface	IEffect {
	id:				number;
	name:			string;
	description:	string;
}

interface	IWeaponEffect {
	effect:				IEffect;
	effect_level:		number;
	energy:				number;
	effect_condition:	string;
}

interface	IAttack {
	position:		number;
	name:			string;
	damage_dice:	number;
	damage_bonus:	number;
	violence_dice:	number;
	violence_bonus:	number;
	reach:			string;
	energy:			number;
	effects:			IWeaponEffect[];
}

interface IWeapon extends Document {
	name:			string;
	description:	string;
	nicknames:		string;
	rarity:			string;
	category:		ICategory;
	cost:			number;
	enhancements:	IEnhancement[];
	attacks:		IAttack[];
}

const weaponSchema = new Schema<IWeapon>({
	name:			{ type: String, required: true },
	description:	{ type: String },
	nicknames:		{ type: String },
	rarity:			{ type: String },
	category:		{
		id:		{ type: Number },
		name:	{ type: String },
	},
	cost:			{ type: Number, required: true },
	enhancements:	[{
		id:		{ type: Number },
		name:	{ type: String },
	}],
	attacks:		[{
		position:		{ type: Number },
		name:			{ type: String },
		damage_dice:	{ type: Number },
		damage_bonus:	{ type: Number },
		violence_dice:	{ type: Number },
		violence_bonus:	{ type: Number },
		reach:			{ type: String },
		energy:			{ type: Number },
		effects:			[{
			effect:	{
				id:				{ type: Number },
				name:			{ type: String },
				description:	{ type: String },
			},
			effect_level:		{ type: Number },
			energy:				{ type: Number },
			effect_condition:	{ type: String },
		}],
	}],
});

export const Weapon = model<IWeapon>('Weapon', weaponSchema);