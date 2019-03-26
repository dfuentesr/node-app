const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');

// Initializations
const app = express();
require('./database');
// require('./config/passport');


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'nymapp',
    resave: true,
    saveUninitialized: true
}));


//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));

app.use(express.static(path.join(__dirname, 'public')));

// Servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});