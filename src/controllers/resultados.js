const alumnos = require("../models/alumnos");

const Alumno = require("../models/alumnos")

async function TraerAlumnos(req,res){
    const curp=req.params.curp
    try {
        const [resultado] = await Alumno.find({curp})
        if(resultado){
            if(resultado.aceptado){
                res.status(200).json(
                    {
                        "titulo": "Bienvenido al cbtis 128 la casa de los jaguares",
                        "mensaje": "Felicidades, tu examen due evaluado y fuiste aceptado en la institucion",
                        resultado
                    })
            }
            if(!resultado.aceptado){
                res.status(200).json(
                    {
                        "titulo": "No fuiste aceptado",
                        "mensaje": "Puedes encontrasr mas informacion aqui",
                        "link": "https://www.x.com",
                        resultado

                    })
            }
        }
        if(!resultado){
            res.status(404).json(
                {
                    "titulo":"Error",
                    "mensaje": "La curp que ha introducido esta mal escrita o esa curp no esta registrada, favor de verificarla"
                })
        }
    } catch (error) {
        res.status(500).json({"mensaje": "ha ocurrido un error en el servidor: "+error})
    }
}
  
module.exports = {
    TraerAlumnos
}