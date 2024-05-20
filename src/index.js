const express = require("express");
const cors = require('cors');
const conectarBD = require ("../config/db");

//Creamos el servidor
const app = express();
//Vamos a conetar la base de datos
conectarBD();
//Habilitar los cors
app.use(cors());
//Habilitar el json
app.use(express.json({extended:true}));

const PORT = process.env.PORT || 4000;

//Rutas de los modulos 
app.use("/api/usuarios", require("../routes/usuarios"));
app.use("/api/auth", require("../routes/auth"));
app.use("/api/clientes", require("../routes/rutaCliente"));

 

app.listen(PORT, () =>{
    console.log("El servidor esta iniciado");
});