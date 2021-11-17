//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controllerCategorie = require('../controllers/categorie');


//CREATE
router.post("/categorie", (req, res) => {

    controllerCategorie.create(req, res);

});

//READ
router.get("/categories", (req, res) => {
    
    controllerCategorie.reads(req, res);

});

router.get("/categorie/:id", (req, res) => {
    
    controllerCategorie.read(req, res);

});

//UPDATE
router.put("/categorie/:id", (req, res) => {
    
    controllerCategorie.update(req, res);

});

//DELETE
router.delete("/categorie/:id", (req, res) => {
    
    controllerCategorie.delete(req, res);

});

module.exports = router;