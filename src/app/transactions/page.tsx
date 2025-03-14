import TableHeader from './components/TableHeader';
import TransactionItem from './components/TransactionItem';
import data from '@/data.json';
import TransactionListHeader from './components/TransactionListHeader';

const transactions = data.transactions;

const Transactions = () => {
  return (
    <section>
      <div className="md:py-2">
        <h1 className="text-1 ">Transactions</h1>
      </div>

      <div className="mt-8 py-6 px-5 md:p-8 bg-white rounded-xl ">
        <TableHeader />
        {/* transaction list header */}
        <TransactionListHeader />
        {/* table list */}
        <div className="mt-6">
          {transactions.map((transaction, index) => (
            <TransactionItem
              key={transaction.name + index}
              amount={transaction.amount}
              avatar={transaction.avatar}
              category={transaction.category}
              date={transaction.date}
              name={transaction.name}
              recurring={transaction.recurring}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Transactions;
