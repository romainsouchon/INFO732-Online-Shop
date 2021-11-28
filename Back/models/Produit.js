var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  name : String,
  description : String,
  idcategorie : String,
  price : Number
});

module.exports = mongoose.model('Produit', ProduitSchema);
