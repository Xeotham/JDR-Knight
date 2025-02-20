"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = void 0;
const mongoose_1 = require("mongoose");
const modulesSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    category: {
        id: { type: Number, required: true },
        name: { type: String, required: true },
    },
    levels: [{
            level: { type: Number },
            description: { type: String },
            rarity: { type: String },
            cost: { type: Number },
            activation: { type: String },
            duration: { type: String },
            damage_dice: { type: Number },
            damage_bonus: { type: Number },
            violence_dice: { type: Number },
            violence_bonus: { type: Number },
            reach: { type: String },
            energy: { type: Number },
            effects: [{ type: String },],
            npcs: [{
                    name: { type: String },
                    defence: { type: Number },
                    reaction: { type: Number },
                    initiative: { type: Number },
                    health: { type: Number },
                    energy: { type: Number },
                    armour: { type: Number },
                    force_field: { type: Number },
                    cohesion: { type: Number },
                    outbreak: { type: Number },
                    speed: { type: Number },
                }],
        }],
    slots: [{
            head: { type: Number },
            left_arm: { type: Number },
            right_arm: { type: Number },
            torso: { type: Number },
            left_leg: { type: Number },
            right_leg: { type: Number },
        }]
});
exports.Modules = (0, mongoose_1.model)('Modules', modulesSchema);
