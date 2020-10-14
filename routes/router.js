const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Routing 
router.get('/', (req, res) => {
    res.render('home');
});

router.post('/join', (req, res) => {
    let code = req.query['code'];
    res.redirect(`/${code}`);
});

router.get('/create', (req, res) => {
    res.redirect(`/${uuidv4()}`);
});

router.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
});

module.exports = router;