const express = require('express');
const router = express.Router()
const db = require('../models/index')

// GET	/pieces	Index page to deliver a list of pieces
router.get('/', (req, res) => {
    db.Piece.find()
    .then(pieces => {
        res.send(pieces);
    }).catch(err => console.log(err));
});

// POST	/pieces	Take form data to add a new piece (remember to add museum and creator!)
router.post('/', (req, res) => {
    db.Piece.create(req.body)
    .then(piece => {
        res.redirect(`/pieces/${piece.id}`);
    }).catch(err => console.log(err));
})

// GET	/pieces/:id	Show page for specific piece. Include all creator info!
router.get('/:id', (req, res) => {
    db.Piece.findById(req.params.id)
    .then(piece => {
        res.send(piece);
    }).catch(err => console.log(err));
})



module.exports = router;