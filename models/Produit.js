var mongoose = require('mongoose');
const categorie = require('./categorie');

var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  name : String,
  description : String,
  price : Number,
  categorie : String
  
});

module.exports = mongoose.model('Produit', ProduitSchema);
