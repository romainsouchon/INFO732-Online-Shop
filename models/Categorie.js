var mongoose = require('mongoose');
const boutique = require('./boutique');

var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  name : String,
  description : String,
  boutique : String
});

module.exports = mongoose.model('Categorie', CategorieSchema);
