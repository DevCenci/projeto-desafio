const { MoneyTransaction } = require('../models');

class MoneyTransactionController {

    static async listAll(req, res) {
        const { limit = 200, offset = 400 } = req.query;

        try {

            const listarTodos = await MoneyTransaction.findAll({
                limit: Number(limit),
                offset: Number(offset),
            });
            return res.status(200).json(listarTodos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await MoneyTransaction.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
    static async buscaId(req, res) {
        const { id } = req.params
        try {
            const pessoaId = await MoneyTransaction.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoaId)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { sender, sender_bank_account, receiver, receiver_bank_account, amount } = req.body;

        const updatePessoa = await MoneyTransaction.update({
            sender: sender,
            sender_bank_account: sender_bank_account,
            receiver: receiver,
            receiver_bank_account: receiver_bank_account,
            amount: amount,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ 'status': true, 'id': req.params.id })
    };

    static async buscarSender(req, res) {
        const { limit = 200, offset = 400 } = req.query;
        const sender = req.query.sender
        try {
            const pessoa = await MoneyTransaction.findAll(
                {
                    where: { sender: sender },
                    limit: Number(limit),
                    offset: Number(offset),
                })
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }


    }
    static async delete(req, res) {
        const deletePessoa = await MoneyTransaction.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json(deletePessoa);
    }

}
module.exports = MoneyTransactionController;