const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');
app.set('port', 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/categoria', require('./routes/categoria.route'));
app.use('/platillo', require('./routes/platillo.route'));
//const port = process.env.PORT || 5000;

app.listen(app.get('port'), () => {
    console.log('Servidor funcionando');
});