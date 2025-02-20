import { Schema, model, Document } from 'mongoose';

interface IArmor extends Document {
	name:					string;
	background_description:	string;
	technical_description:	string;
	additional_notes:		string;
	generation:				number;
	energy_points:			number;
	armour_points:			number;
	force_field:			number;
	slot_head:				number;
	slot_left_arm:			number;
	slot_right_arm:			number;
	slot_torso:				number;
	slot_left_leg:			number;
	slot_right_leg:			number;
}

const armorSchema = new Schema<IArmor>({
	name:					{ type: String, required: true },
	background_description:	{ type: String },
	technical_description:	{ type: String },
	generation:				{ type: Number },
	energy_points:			{ type: Number },
	armour_points:			{ type: Number },
	force_field:			{ type: Number },
	slot_head:				{ type: Number },
	slot_left_arm:			{ type: Number },
	slot_right_arm:			{ type: Number },
	slot_torso:				{ type: Number },
	slot_left_leg:			{ type: Number },
	slot_right_leg:			{ type: Number }
});

export const Armor = model<IArmor>('Armor', armorSchema);