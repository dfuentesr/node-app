const express = require('express');

const router = express.Router();

// const { isAuthenticated } = require('../helpers/auth');
const Note = require('../models/Note');
router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

router.post('/notes/new-note', async(req, res) => {
    const { title, description } = req.body;
    const errors = [];
    if (!title) {
        errors.push({ text: 'Por favor, escriba el título.' });
    }
    if (!description) {
        errors.push({ text: 'Por favor, escriba la descripción.' });
    }
    if (errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    } else {
        const newNote = new Note({ title, description });
        // newNote.user = req.user.id;
        await newNote.save();
        // req.flash('success_msg', 'Note Added Successfully');
        // res.redirect('/notes');
    }
});

router.get('/notas', (req, res) => {
    res.send('notas de la bd');
});

module.exports = router;