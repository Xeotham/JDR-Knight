"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const mongoose_1 = require("mongoose");
const characterSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    weapons: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Weapon' }],
    modules: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Module' }],
    armor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Armor' },
    stats: [{
            aspect: {
                name: String,
                value: Number,
            },
            carac: [{
                    name: String,
                    value: Number,
                    od: [{
                            description: String,
                            obtained: Boolean,
                        }],
                }],
        }],
    created_at: { type: Date, default: Date.now }
});
exports.Character = (0, mongoose_1.model)('Character', characterSchema);
