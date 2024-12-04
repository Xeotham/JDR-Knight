const mongoose = require("mongoose");
const GearsSchema = require('./gears')


const PjSchema = mongoose.Schema({
   userId :{type: String, required: true},
   name:{type: String, required: true},
   archetype:{type: String, required: true},
   card_tarot:{type: [String], required:true},
   great_deed:{type: String, required:true},
   crest:{type: String, required:true},
   Armour:{type: String, required:true},
   division:{type: String, required:false},
   description:{type: String, required: false},
   stats:{type: [GearsSchema], required:true},
   overdrives:{type: [GearsSchema], required:true},
});

module.exports = mongoose.model("Pj", PjSchema);