'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    static associate(models) {
      this.belongsTo(models.Accounts, {
        foreignKey: 'account_ori'
      });
      
      this.belongsTo(models.transactions_types, {
        foreignKey: 'transaction_type'
      })
    }
  };
  transactions.init({
    account_ori: DataTypes.INTEGER,
    account_des: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    transaction_type: DataTypes.INTEGER,
    trans_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};