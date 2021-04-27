const {AccountTypes, Accounts} = require('../models');

const getAccountTypes = async (req, res) => {
    //Modelo -> Obtener los registros de la DB
    let accountTypes = await AccountTypes.findAll({include: [{model: Accounts}]});
    //Vista -> Enviar la respuesta al cliente con la vista y datos 
    res.render('account_types', {accountTypes})
}

module.exports = {
    getAccountTypes
}