const mongoose = require('mongoose');
const { Schema } = mongoose;

const platilloSchema = new Schema({
    idCategoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        require: true
    },
    strNombre: {
        type: String,
        require: true,
        unique: true
    },
    strDescripcion: {
        type: String,
        require: true
    },
    strIngredientes: {
        type: String,
        require: true
    },
    nmbPiezas: {
        type: Number,
        require: true
    },
    nmbPrecio: {
        type: Number,
        require: true
    },
    blnStatus: {
        type: Boolean,
        require: true
    }
});


module.exports = mongoose.model('platillos', platilloSchema);