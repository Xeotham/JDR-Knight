const mongoose = require("mongoose");

const GearsSchema = mongoose.Schema({
    gearId:			{type: String, required: true},
    gearName:		{type: String, required: true},
    gearDamages:	{type: BigInt, required: false},
    gearViolence:	{type: BigInt, required: false},
    gearEffects:	{type: [String], required: false},
    gearDist:		{type: String, required: false},
    gearActivation: {type: BigInt, required: false},
	gearEnergyCost:	{type: BigInt, required: false},
    gearCost:       {type: BigInt, required: true}
});

module.exports = GearsSchema;