const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeapp', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('BD conectada'))
    .catch(err => console.log(err));