//Dos formas para poder utilizar dotenv
require('dotenv').config();
const {getAccountTypes} = require('./controllers/accountTypes');
const {getAccounts} = require('./controllers/accounts');

const express = require('express');
//Importar un módelo de base de datos
const {AccountTypes, clients:Clients, accounts: Accounts} = require('./models');

const app = express();
app.set('view engine', 'ejs');

//CRUD -> Create, Read, Update y Delete

//Para poder leer los datos que envía el cliente con el formato URL Encoded
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res) => {
    res.send("Servidor Academlo");
});

//Read
app.get("/account_types", getAccountTypes);

app.get('/accounts', getAccounts);

app.get("/clients", async (req, res) => {
    let clients = await Clients.findAll({include: [{model: Accounts}]});
    clients = clients.map( client => client.get({plain: true}));
    res.render('clients', {clients});
});

const PORT = process.env.PORT || 8080;

//Create server
app.listen(PORT, () => {
    console.log("Servidor escuchando sobre el puerto", PORT);
});