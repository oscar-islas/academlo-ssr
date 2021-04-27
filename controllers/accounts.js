const {Accounts, Clients, AccountTypes} = require('../models')

//Controller
const getAccounts = async (req, res) => {
    //Model
    let accounts = await Accounts.findAll({include: [{model: AccountTypes}, {model: Clients}]  });
    console.log(accounts.map( account => account.get({plain: true})));
    //View
    res.render('accounts', {accounts});
}

module.exports = {
    getAccounts
}