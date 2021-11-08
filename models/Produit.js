var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  name : String,
  description : String,
  price : Number,
  categorie : { type: Schema.Types.ObjectId, ref: 'Categorie' }
  
});

module.exports = mongoose.model('Produit', ProduitSchema);
