//FICHIER CONTENANT L'APPLICATION EXPRESS
const express = require('express');
const app = express();
//Pour gérer la requête POST venant de l'application front-end, on a besoin d'en extraire le corps JSON (a dispo dans req.body). On le fait avec le Middleware suivant
app.use(express.json());

const path = require('path');
//IMPORT DU FICHIER RELATIF A LA BASE DE DONNEES
require ('./dbConfig');

require('dotenv').config();

//ROUTES POUR SAUCES ET USERS
const sauceRoutes = require("./routes/sauce");
const userRoutes = require('./routes/user');


//PLACE LES HEADERS POUR PERMETTRE D'ACCEDER A L'API DEPUIS N'IMPORTE QUELLE ORIGINE --- PREMIER MIDDLEWARE EXECUTÉ PAR LE SERVEUR
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

  





module.exports = app;



