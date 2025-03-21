import TableHeader from './components/TableHeader';
import TransactionListHeader from './components/TransactionListHeader';
import TransactionList from './components/TransactionList';

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
        <TransactionList className="mt-6" />
      </div>
    </section>
  );
};
export default Transactions;
