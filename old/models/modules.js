const mongoose = require("mongoose");

const ModuleSchema = mongoose.Schema({
    moduleId:			{type: String, required: true},
    moduleName:		    {type: String, required: true},
    moduleDamages:	    {type: BigInt, required: false},
    moduleViolence:	    {type: BigInt, required: false},
    moduleEffects:	    {type: [String], required: false},
    moduleDist:		    {type: String, required: false},
    moduleActivation:   {type: BigInt, required: false},
	moduleEnergyCost:	{type: BigInt, required: false},
    moduleCost:         {type: BigInt, required: true}
});

module.exports = ModuleSchema;