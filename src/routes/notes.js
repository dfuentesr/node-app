const express = require('express');

const router = express.Router();

// const { isAuthenticated } = require('../helpers/auth');
const Note = require('../models/Note');

// Obtener Notas
router.get('/notes/list', async(req, res) => {
    let notes = await Note.find()
    res.json({
        status: true,
        data: notes
    })

    // const { title, description } = req.body;
    // const errors = [];
    // if (!title) {
    //     errors.push({ text: 'Por favor, escriba el título.' });
    // }
    // if (!description) {
    //     errors.push({ text: 'Por favor, escriba la descripción.' });
    // }
    // if (errors.length > 0) {
    //     res.json({
    //         status: false,
    //         msg: errors
    //     })
    // } else {
    //     const newNote = new Note({ title, description });
    //     await newNote.save();
    //     res.json({
    //         status: true,
    //         msg: 'Tarea registrada correctamente'
    //     })
    // }
});

// Crear notas
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
        res.json({
            status: false,
            msg: errors
        })
    } else {
        const newNote = new Note({ title, description });
        await newNote.save();
        res.json({
            status: true,
            msg: 'Tarea registrada correctamente'
        })
    }
});

module.exports = router;