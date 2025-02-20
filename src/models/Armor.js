"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armor = void 0;
const mongoose_1 = require("mongoose");
const armorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    background_description: { type: String },
    technical_description: { type: String },
    generation: { type: Number },
    energy_points: { type: Number },
    armour_points: { type: Number },
    force_field: { type: Number },
    slot_head: { type: Number },
    slot_left_arm: { type: Number },
    slot_right_arm: { type: Number },
    slot_torso: { type: Number },
    slot_left_leg: { type: Number },
    slot_right_leg: { type: Number }
});
exports.Armor = (0, mongoose_1.model)('Armor', armorSchema);
