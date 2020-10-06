const alumnos = require("../models/alumnos");

const Alumno = require("../models/alumnos")

async function TraerAlumnos(req,res){
    const rawCurp=req.params.curp
    const curp = rawCurp.toLowerCase().trim()

    
    try {
        const [resultado] = await Alumno.find({curp})
        
        if(resultado){
                res.status(200).json(resultado)
        }
        if(!resultado ){
            res.status(404).json(
                {
                    "curp":curp,
                    "titulo":"error-404",
                    "mensaje": "La curp que ha introducido esta mal escrita o esa curp no esta registrada, favor de verificarla"
                })
        }
    } catch (error) {
        res.status(500).json(
            {
                "titulo":"error-500",
                "mensaje": "ha ocurrido un error en el servidor: "+error
            })
    }
}
  
module.exports = {
    TraerAlumnos
}