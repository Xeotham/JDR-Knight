const mongoose = require("mongoose");

const GearsSchema = mongoose.Schema({
    gearId:			{type: String, required: true},
    gearName:		{type: String, required: true},
    gearDamages:	{type: BigInt, required: true},
    gearViolence:	{type: BigInt, required: true},
    gearEffects:	{type: [String], required: false},
    gearDist:		{type: String, required: true},
	gearEnergyCost:	{type: BigInt, required: false}
});

module.exports = GearsSchema;