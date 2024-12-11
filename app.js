const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRoutes = require("./routes/user");
const pjRoutes = require('./routes/pj');
const gearRoutes = require('./routes/gears');
const path = require('path');
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch")
require('dotenv').config();

// DEPRECATION WARNINGS
mongoose.set('strictQuery', false);

//CONNECT TO MONGODB WITH MANGOOSE
mongoose
  .connect(
    process.env.MONGO_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !") )
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

//HEADERS FOR CORS ERROR
app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.options('/*', (_, res) => {
  res.sendStatus(200);
});

// PARSE REQUESTS JSON
app.use(bodyParser.json());

//ROUTES
app.use("/api/auth", userRoutes);
app.use('/api/pj', pjRoutes);
app.use('/api/gears', gearRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;

//VARIABLES UTILES

const API_URL = "http://localhost:3000/api";
const TOKEN = localStorage.getItem("authToken");

//FONCTION POUR INTERAGIR ENTRE LE FRONT ET LE BACK

async function fetchGears() {
  try{
      const response = await fetch(`${API_URL}/gears`,{
        headers: { Authorization: `Bearer ${TOKEN}`},
      });
      const gears = await response.json();
      displayGears(gears);
  }
  catch(error)
  {
    console.error("Erreur lors de la recuperation des gears:", error);
  }  
}

function displayGears(gears){
  const gearlist = document.getElementById("gears-List");
  gearsList.innerHTML = gears
    .map(gear => `<div class="gear-item">${gear.gearName}</div>`)
    .join("");
}

async function fetchPJs() {
  try{
      const response = await fetch(`${API_URL}/pj`,{
        headers: { Authorization: `Bearer ${TOKEN}`},
      });
      const pjs = await response.json();
      displayGears(pjs);
  }
  catch(error)
  {
    console.error("Erreur lors de la recuperation des PJs:", error);
  }
}

function displayPJs(pjs){
  const gearlist = document.getElementById("pjs-List");
  PjList.innerHTML = pjs
    .map(pj => `<div class="gear-item">${pj.Name}</div>`)
    .join("");
}

// document.addEventListener("DOMContentLoaded", () => {
//   if (TOKEN)
//     {
//       fetchGears();
//       fetchPJs();
//     }
//     else{
//       alert("veuillez vous connecter !");
//     }
// });