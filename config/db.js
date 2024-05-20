const mongoose = require ('mongoose');
require('dotenv').config({path:".env"});

//coneccion con mongoDB
const conectarDB = async () => {

mongoose
.connect(process.env.DB_MONGO)
.then(() => console.log('Estamos conectados con Mongo'))
.catch((err) => console.error(err));
}

module.exports = conectarDB;