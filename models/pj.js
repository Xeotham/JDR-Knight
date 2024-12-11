const mongoose = require("mongoose");
const GearsSchema = require('./gears')
const ModuleSchema = require('./modules')


const CaracSchema = new mongoose.Schema({
	lvl:	{ type: BigInt, required: true },
	od:		{ type: BigInt, required: true }
 });
 
 const StatsSchema = new mongoose.Schema({
	aspect:	{ type: BigInt, required: true },
	carac1:	{ type: CaracSchema, required: true },
	carac2:	{ type: CaracSchema, required: true },
	carac3:	{ type: CaracSchema, required: true }
 });

const PjSchema = mongoose.Schema({
   userId :		{type: String, required: true},
   name:		{type: String, required: true},
   archetype:	{type: String, required: true},
   card_tarot:	{type: [String], required:true},
   great_deed:	{type: String, required:true},
   crest:		{type: String, required:true},
   Armour:		{type: String, required:true},
   division:	{type: String, required:false},
   description:	{type: String, required: false},
   stats:		{type: [StatsSchema], required:true},
   gears:		{type: [GearsSchema], required:false},
   modules:		{type: [ModuleSchema], required:false}
});

module.exports = mongoose.model("Pj", PjSchema);