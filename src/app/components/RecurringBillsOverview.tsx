import CategoryHeader from './CategoryHeader';
import RecurringBillsOverviewItem from './RecurringBillsOverviewItem';

// import data from '@/data.json';

// const { transactions } = data;

// const recurringTransactions = transactions.filter(
//   (transaction) => transaction.recurring
// );

// console.log(recurringTransactions);

const RecurringBillsOverview = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl">
      <CategoryHeader category="Recurring Bills" text="See Details" />

      <div className="mt-8 flex flex-col gap-y-3">
        <RecurringBillsOverviewItem amount="$190.00" bill="Paid Bills" />
        <RecurringBillsOverviewItem amount="$194.98" bill="Total Upcoming" />
        <RecurringBillsOverviewItem amount="$59.98" bill="Due Soon" />
      </div>
    </div>
  );
};
export default RecurringBillsOverview;
