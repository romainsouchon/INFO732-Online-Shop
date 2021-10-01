var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Produit = new Schema({
    nom : String,
    description : String,
    Prix : Float32Array
});

module.exports = mongoose.model('Projet', Produit);