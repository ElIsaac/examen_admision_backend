const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const alumnoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    curp: {
        type: String,
        unique: true,
        required: true
    },
    aceptado: {
        type: Boolean,
        required: true
    },
    grupo: {
        type: String,
        required: true
    },
    turno: {
        type: String,
        required: true
    },

})
module.exports =mongoose.model("Alumno", alumnoSchema );