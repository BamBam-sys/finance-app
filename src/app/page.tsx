import BudgetsOverview from './components/BudgetsOverview';
import CategoryCard from './components/CategoryCard';
import PotsOverview from './components/PotsOverview';
import RecurringBillsOverview from './components/RecurringBillsOverview';
import TransactionsOverview from './components/TransactionsOverview';

import data from '@/data.json';

const {
  balance: { current, expenses, income },
} = data;

export default function Overview() {
  return (
    <section>
      <div className="md:py-2">
        <h1 className="text-1 ">Overview</h1>
      </div>

      <div className="flex flex-col md:flex-row mt-8 gap-y-3 gap-x-6">
        <CategoryCard
          amount={current}
          title="Current Balance"
          className="bg-grey-900 text-white"
        />
        <CategoryCard
          amount={expenses}
          title="Income"
          className="bg-white text-grey-900"
        />
        <CategoryCard
          amount={income}
          title="Expenses"
          className="bg-white text-grey-900"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <div className="flex-1 lg:max-w-[608px] space-y-6 ">
          <PotsOverview />
          <TransactionsOverview />
        </div>
        {/*  */}
        <div className="flex-1 lg:max-w-[428px] space-y-6">
          <BudgetsOverview />
          <RecurringBillsOverview />
        </div>
      </div>
    </section>
  );
}
