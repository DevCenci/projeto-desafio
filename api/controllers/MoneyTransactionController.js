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

    static async update(req, res){
        const {sender, sender_bank_account, receiver, receiver_bank_account, amount} = req.body;

        const updatePessoa = await MoneyTransaction.update({
          sender: sender,
          sender_bank_account: sender_bank_account,
          receiver: receiver,
          receiver_bank_account: receiver_bank_account,
          amount: amount,
    },{
            where:{
                id: req.params.id
            }    
    })
        res.status(200).json({'status':true, 'id':req.params.id})
    };
    
}

module.exports = MoneyTransactionController;