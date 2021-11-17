var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  name : String,
  description : String,
  categorie : { type: Schema.Types.ObjectId, ref: 'Categorie' },
  price : Number
});

module.exports = mongoose.model('Produit', ProduitSchema);
