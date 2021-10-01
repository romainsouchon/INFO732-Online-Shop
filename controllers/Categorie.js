function createCategorie(req, res) {
    let Categorie = require('../models/Categorie');
    let newCategorie = Categorie ({
        title: req.body.title,
        description : req.body.description
    });
  
    newCategorie.save()
    .then((savedCategorie) => {

        //send back the created Categorie
        res.json(savedCategorie);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readCategories(req, res) {

    let Categorie = require("../models/Categorie");

    Categorie.find({})
    .then((Categories) => {
        res.status(200).json(Categories);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readCategorie(req, res) {

    let Categorie = require("../models/Categorie");

    Categorie.findById({_id : req.params.id})
    .then((Categorie) => {
        res.status(200).json(Categorie);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateCategorie(req, res) {

    let Categorie = require("../models/Categorie");

    Categorie.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.description}, 
        {new : true})
    .then((updatedCategorie) => {
        res.status(200).json(updatedCategorie);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteCategorie(req, res) {

    let Categorie = require("../models/Categorie");

    Categorie.findOneAndRemove({_id : req.params.id})
    .then((deletedCategorie) => {
        res.status(200).json(deletedCategorie);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createCategorie;
module.exports.reads = readCategories;
module.exports.read = readCategorie;
module.exports.delete = deleteCategorie;
module.exports.update = updateCategorie;
