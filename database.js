const mongoose = require('mongoose');
const uri = 'mongodb://localhost/gestion-menu';

mongoose.connect(uri).then(res => {
    console.log('ok');
}).catch(err => {
    console.log(err);
});

module.exports = mongoose;