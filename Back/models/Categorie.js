var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  name : String,
  description : String,
  idboutique : String,
});

module.exports = mongoose.model('Categorie', CategorieSchema);
