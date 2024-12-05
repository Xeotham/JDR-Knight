const mongoose = require("mongoose");
const GearsSchema = require('./gears')

class Carac {
   constructor(lvl, od) {
      this.lvl = lvl;
      this.od = od;
   }

   get lvl() {
	return this.lvl;
   }

   get od() {
	return this.od;
   }
}

class Stats {

   constructor(aspect = 2, carac1 = 1, od1 = 0, carac2 = 1, od2 = 0, carac3 = 1, od3 = 0) {
      this.aspect = aspect;
      this.carac1 = Carac(carac1, od1);
      this.carac2 = Carac(carac2, od2);
      this.carac3 = Carac(carac3, od3);
   }

   get aspect() {
	return this.aspect;
   }

   get carac1() {
	return this.carac1;
   }

   get carac2() {
	return this.carac2;
   }

   get carac3() {
	return this.carac3;
   }
}


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
   stats:{type: [Stats], required:true},
});

module.exports = mongoose.model("Pj", PjSchema);