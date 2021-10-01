var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Categorie = new Schema({
    nom : String,
    description : String
});

module.exports = mongoose.model('Projet', Categorie);