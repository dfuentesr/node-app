const mongoose = require('mongoose');
const URL = 'mongodb://localhost/nodeapp'

mongoose.connect(URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('BD conectada'))
    .catch(err => console.log(err));

module.exports = mongoose
