const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriaSchema = new Schema({
    strNombre: {
        type: String,
        require: true,
        unique: true
    },
    strDescripcion: {
        type: String,
        require: true
    },
    blnStatus: {
        type: Boolean,
        require: true,
        default: true
    }
});

module.exports = mongoose.model('categorias', categoriaSchema);