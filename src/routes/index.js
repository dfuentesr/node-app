const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

router.get('/notes', (req, res) => {
    res.render('notes/all-notes');
});
module.exports = router;