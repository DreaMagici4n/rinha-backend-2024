class SaveTransactionModel {
  async save(transaction) {
    return {
      ultimas_trasacoes: [
        {
          valor: 'any_value',
          tipo: 'any_tipo',
          descricao: 'any_descricao',
          realizada_em: new Date('2024-02-12')
        }
      ]
    }
  }
}
module.exports = SaveTransactionModel