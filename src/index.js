const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
var path = require('path');

const app = express();
const port = 3000;
const router = require('./routes/index');

// Static file
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP Logger
app.use(morgan('combined')
);

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

console.log(path.join(__dirname, 'public'));

router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
