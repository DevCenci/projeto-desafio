const { MoneyTransaction } = require('../models');

class MoneyTransactionController {

    static async listAll(req, res) {

        try {
            const listarTodos = await MoneyTransaction.findAll();
            return res.status(200).json(listarTodos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = MoneyTransactionController;