var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Boutique = new Schema({
  title : String,
  description : String
});

module.exports = mongoose.model('Projet', Boutique);
