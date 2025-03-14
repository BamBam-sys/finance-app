import BudgetPieChart from '@/components/BudgetPieChart';
import CategoryHeader from './CategoryHeader';
import ExpenseCategory from './ExpenseCategory';

import data from '@/data.json';

const { budgets } = data;

const BudgetsOverview = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl">
      <CategoryHeader category="Budgets" text="See Details" />

      <div className="mt-5 md:py-[31px] flex flex-col md:flex-row md:items-center gap-4 md:gap-2">
        <div className="md:px-[3.5px] md:basis-[507px] lg:basis-[247px] ">
          <BudgetPieChart />
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-y-4">
          {budgets.map((budget) => (
            <ExpenseCategory
              key={budget.category}
              amount={budget.maximum}
              category={budget.category}
              backgroundColor={budget.theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BudgetsOverview;
