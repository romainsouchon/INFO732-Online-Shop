var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  name : String,
  description : String,
  price : Number,
  categorie : String
  
});

module.exports = mongoose.model('Produit', ProduitSchema);
