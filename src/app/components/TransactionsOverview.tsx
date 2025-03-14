import CategoryHeader from './CategoryHeader';
import TransactionOverviewItem from './TransactionOverviewItem';
import data from '@/data.json';

const transactions = data.transactions.slice(0, 6);

const TransactionsOverview = () => {
  return (
    <div className="bg-white px-5 py-6 md:p-8 rounded-xl">
      <CategoryHeader category="Transactions" text="View All" />

      <div className="mt-8">
        {transactions.map(({ amount, avatar, date, name }) => (
          <TransactionOverviewItem
            amount={amount}
            avatar={avatar}
            date={date}
            name={name}
            key={name + amount}
          />
        ))}
      </div>
    </div>
  );
};
export default TransactionsOverview;
