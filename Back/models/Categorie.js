var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  name : String,
  description : String,
  boutique : { type: Schema.Types.ObjectId, ref: 'Boutique' }
});

module.exports = mongoose.model('Categorie', CategorieSchema);
