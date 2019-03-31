const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {mongoose} = require('./database')
const exphbs = require('express-handlebars');
// const methodOverride = require('method-override');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');

// Initializations

// require('./config/passport');

// Settings
app.set('port', process.env.PORT || 3000);

// Views
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');


app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
// app.use(session({
//     secret: 'nymapp',
//     resave: true,
//     saveUninitialized: true
// }));


// Middlewares
app.use(morgan('dev'))
app.use(express.json())


//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));

// Statics
app.use(express.static(path.join(__dirname, 'public')));

// Servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});