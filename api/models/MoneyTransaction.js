'use strict';
const {
  Model
} = require('sequelize');

//ssss
module.exports = (sequelize, DataTypes) => {
  class MoneyTransaction extends Model {

    static associate(models) {
        
    }
  }
  
  MoneyTransaction.init( 
    {
        sender: DataTypes.STRING,

        sender_bank_account: DataTypes.STRING,

        receiver: DataTypes.STRING,

        receiver_bank_account: DataTypes.STRING,

        amount:DataTypes.STRING
    } , {
    sequelize,
    modelName: 'MoneyTransaction'
  });
  return MoneyTransaction;
};

