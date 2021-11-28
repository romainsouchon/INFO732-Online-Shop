function createProduit(req, res) {
    let Produit = require('../models/Produit');
    let newProduit = Produit ({
        name: req.body.name,
        description : req.body.description,
        idcategorie : req.body.idcategorie,
        price : req.body.price,
    });
  
    newProduit.save()
    .then((savedProduit) => {

        //send back the created Todo
        res.json(savedProduit);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readProduits(req, res) {

    let Produit = require("../models/Produit");

    Produit.find({idcategorie : req.params.id})
    .then((Produits) => {
        res.status(200).json(Produits);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readProduit(req, res) {

    let Produit = require("../models/Produit");

    Produit.findById({_id : req.params.id})
    .then((Produit) => {
        res.status(200).json(Produit);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateProduit(req, res) {

    let Produit = require("../models/Produit");

    Produit.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        description : req.body.description,
        idcategorie : req.body.idcategorie,
        price : req.body.price}, 
        {new : true})
    .then((updatedProduit) => {
        res.status(200).json(updatedProduit);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteProduit(req, res) {

    let Produit = require("../models/Produit");

    Produit.findOneAndRemove({_id : req.params.id})
    .then((deletedProduit) => {
        res.status(200).json(deletedProduit);
    }, (err) => {
        res.status(500).json(err);
    });
 }


module.exports.create = createProduit;
module.exports.reads = readProduits;
module.exports.read = readProduit;
module.exports.delete = deleteProduit;
module.exports.update = updateProduit;

