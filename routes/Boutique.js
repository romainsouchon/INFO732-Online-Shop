//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controllerBoutique = require('../controllers/boutique');

//CREATE
router.post("/boutique", (req, res) => {

    controllerBoutique.create(req, res);

});

//READ
router.get("/boutiques", (req, res) => {
    
    controllerBoutique.reads(req, res);

});

router.get("/boutique/:id", (req, res) => {
    
    controllerBoutique.read(req, res);

});

//UPDATE
router.put("/boutique/:id", (req, res) => {
    
    controllerBoutique.update(req, res);

});

//DELETE
router.delete("/boutique/:id", (req, res) => {
    
    controllerBoutique.delete(req, res);

});

module.exports = router;