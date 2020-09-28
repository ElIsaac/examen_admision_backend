const mongoose = require("mongoose");

mongoose.connect(process.env.DB_HOST||"mongodb://localhost/examen",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(db => console.log('base de datos conectada')).catch(err => console.log(err));