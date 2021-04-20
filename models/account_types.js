'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccountTypes extends Model {

    static associate(models) {
      // define association here
    }
  };
  AccountTypes.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'AccountTypes',
    tableName: "account_types"
  });
  return AccountTypes;
};