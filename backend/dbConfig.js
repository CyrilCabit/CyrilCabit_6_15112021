//CONNEXION A LA BASE DE DONNEES MONGODB

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Cylou972:GjUm36y3SvHf2az@cluster0.yporl.mongodb.net/projet6?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
