const express= require("express")
const { TraerAlumnos } = require("../controllers/resultados");
const router = express.Router();

router.get("/resultados/:curp", TraerAlumnos);

module.exports=router;