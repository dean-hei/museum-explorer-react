const express = require('express');
const router = express.Router()
const db = require('../models/index')

// GET	/museums	Index page to deliver a list of museums
router.get('/', (req, res) => {
    db.Museum.find()
    .then(museums => {
        // for a project, look up status and send the status but here we'll just send
        res.send(museums);
    }).catch(err => res.send({ message: 'Error in getting all museums', err }));
})

// GET	/museums/:id	Show page for specific museum. Include list of pieces!
router.get('/:id', (req, res) => {
    db.Museum.findById(req.params.id)
    .then(museum => res.send(museum))
    .catch(err => res.send({message: 'error in getting one museum', err}))
})

// POST	/museums	Take form data and use it to add new museum
router.post('/', (req, res) => {
    db.Museum.create(req.body)
    .then(museum => {
        res.redirect(`/museums/${museum.id}`);
    }).catch(err => console.log(err));
})



module.exports = router;