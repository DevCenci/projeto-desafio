'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('monay_transaction',
     {
        id: {
          type:Sequelize.INTEGER,
          allowNull:false,
          primaryKey: true,
          autoIncrement:true
        },

        sender:{
          type:Sequelize.STRING(100),
          allowNull:false
        },

        sender_bank_account: {
          type:Sequelize.STRING(100),
          allowNull:false
        },

        receiver: {
          type:Sequelize.STRING(100),
          allowNull:false
        },

        receiver_bank_account: {
          type:Sequelize.STRING(100),
          allowNull:false
        },

        amount: {
          type:Sequelize.DOUBLE(100, 2),
          allowNull:false
        }
      }  
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('money_transaction');
  }
};
