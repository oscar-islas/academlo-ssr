'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    static associate(models) {
      this.belongsTo(models.Clients, {
        foreignKey: 'client_id'
      });

      this.belongsTo(models.AccountTypes, {
        foreignKey: 'type'
      });

      this.hasMany(models.transactions, {
        foreignKey: 'account_ori'
      });
    }
  };
  Accounts.init({
    account_no: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accounts',
    underscored: true
  });
  return Accounts;
};