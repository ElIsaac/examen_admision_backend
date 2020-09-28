const express=require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

require("./db")
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(require("./routes/resultados"))

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), ()=>{
    console.log("Servidor en puerto: ",app.get("port"))
})