const express = require('express');
const app = express();
require ('./dbConfig');
app.use(express.json());
const sauceRoutes = require("./routes/stuff");
const userRoutes = require('./routes/user');

//PLACE LES HEADERS POUR PERMETTRE D'ACCEDER A L'API DEPUIS N'IMPORTE QUELLE ORIGINE
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');  

});
//ROUTES POUR SAUCES ET USERS
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
  

  module.exports = app;



