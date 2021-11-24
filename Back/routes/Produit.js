//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controllerProduit = require('../controllers/produit');

//CREATE
router.post("/produit", (req, res) => {

    controllerProduit.create(req, res);

});

//READ
router.get("/produits/:id", (req, res) => {
    
    controllerProduit.reads(req, res);

});

router.get("/produit/:id", (req, res) => {

    controllerProduit.read(req, res);

});

//UPDATE
router.put("/produit/:id", (req, res) => {
    
    controllerProduit.update(req, res);

});

//DELETE
router.delete("/produit/:id", (req, res) => {
    
    controllerProduit.delete(req, res);

});

module.exports = router;