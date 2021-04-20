//Dos formas para poder utilizar dotenv
require('dotenv').config();

// const dotenv = require('dotenv');
// dotenv.config();

const express = require('express');
//Importar un módelo de base de datos
const {AccountTypes} = require('./models');

const app = express();
//CRUD -> Create, Read, Update y Delete

//Para poder leer los datos que envía el cliente con el formato URL Encoded
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res) => {
    res.send("Servidor Academlo");
});

//Read
app.get("/account_types", async (req, res) => {
    let results = await AccountTypes.findAll({raw: true});
    console.log(results);
    res.send("Tipos de cuentas");
});

//Create
app.post("/account_types", async (req, res) => {
    //sacar los datos que me está enviando el cliente
    const {name, description, created_at, update_at} = req.body; //desestructuración
    try{
        //Creamos un registro en la tabla account_types
        let results = await AccountTypes.create({name, description});
        //Enviamos un respuesta satisfactoria
        res.send("Se ha agregado un tipo cuenta");
    }catch(error){
        console.log(error);
        res.status(400).send("No se ha podido agregar el tipo de cuenta");
    }
});


const PORT = process.env.PORT || 8080;

//Create server
app.listen(PORT, () => {
    console.log("Servidor escuchando sobre el puerto", PORT);
});