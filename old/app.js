const express = require("express");
const http = require('http');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRoutes = require("./routes/user");
const pjRoutes = require('./routes/pj');
const gearRoutes = require('./routes/gears');
const path = require('path');
const cors = require('cors');
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
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
app.use(express.static(path.join(__dirname, 'public')));

// Utilisation de CORS pour autoriser l'accès depuis tous les domaines
app.use(cors());

// Ou pour permettre uniquement certains domaines
app.use(cors({
  origin: 'http://localhost:3000'
}));


module.exports = app;

//VARIABLES UTILES

const API_URL = "http://localhost:3000/api";
const TOKEN = localStorage.getItem("authToken");

//GET PATH HTML

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GETTER

app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/api/external-data', (req, res) => {
  const options = {
    hostname: 'knight-jdr-systeme.fr',
    path: '/api',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  console.log('Requesting external data with options:', options);
  const externalReq = http.request(options, (externalRes) => {
    let data = '';
    if (externalRes.statusCode === 301 || externalRes.statusCode === 302) {
      const redirectUrl = externalRes.headers.location;
      console.log('Redirecting to:', redirectUrl);
      return res.redirect(redirectUrl);
    }
    externalRes.on('data', (chunk) => {
      data += chunk;
    });
    externalRes.on('end', () => {
      try {
        const jsonResponse = JSON.parse(data);
        res.status(200).json(jsonResponse);
      } catch (e) {
        console.error('Failed to parse JSON:', e);
        res.status(500).json({ error: 'Failed to parse external data', rawData: data });
      }
    });
  });
  externalReq.on('error', (error) => {
    console.error('Error in external request:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  });
  externalReq.end();
});

//COOKIES

app.get('/set-cookie', (req, res) => {
  res.cookie('token', 'value', {
    httpOnly: true,         // Le cookie est uniquement accessible via HTTP, pas par JavaScript
    secure: true,           // Le cookie ne peut être transmis que sur une connexion HTTPS
    sameSite: 'None'        // Permet aux cookies de travailler dans des contextes tiers
  });
  res.send('Cookie set');
});

fetch('http://localhost:3000/api/external-data', {
  method: 'GET',
  credentials: 'include',
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))


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
  const gearsList = document.getElementById("gears-List");
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
  const pjsList = document.getElementById("pjs-List");
  pjsList.innerHTML = pjs
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
