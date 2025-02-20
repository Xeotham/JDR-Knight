"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
const mongoose_1 = require("mongoose");
const weaponSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    nicknames: { type: String },
    rarity: { type: String },
    category: {
        id: { type: Number },
        name: { type: String },
    },
    cost: { type: Number, required: true },
    enhancements: [{
            id: { type: Number },
            name: { type: String },
        }],
    attacks: [{
            position: { type: Number },
            name: { type: String },
            damage_dice: { type: Number },
            damage_bonus: { type: Number },
            violence_dice: { type: Number },
            violence_bonus: { type: Number },
            reach: { type: String },
            energy: { type: Number },
            effects: [{
                    effect: {
                        id: { type: Number },
                        name: { type: String },
                        description: { type: String },
                    },
                    effect_level: { type: Number },
                    energy: { type: Number },
                    effect_condition: { type: String },
                }],
        }],
});
exports.Weapon = (0, mongoose_1.model)('Weapon', weaponSchema);
