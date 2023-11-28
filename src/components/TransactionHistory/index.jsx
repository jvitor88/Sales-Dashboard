import Transaction from "../Transaction"

import transactions from "../../data/transactions.json"

const TransactionHistory = ({ qtd }) => {
  return (
    <div className="flex flex-col gap-6 p-6">
      {transactions.filter(transaction => transaction.id < qtd).map(transaction => (
        <Transaction key={transaction.id} day={transaction.dia} value={transaction.valor} />
      ))}
    </div>
  )
}

export default TransactionHistory