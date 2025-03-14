import Pot from '@/assets/icons/Pot';
import ExpenseCategory from './ExpenseCategory';
import CategoryHeader from './CategoryHeader';

import data from '@/data.json';

const { pots } = data;

const PotsOverview = () => {
  return (
    <div className="bg-white px-5 py-6 md:p-8 rounded-xl">
      <CategoryHeader category="Pots" text="See Details" />

      <div className="mt-5 flex flex-col md:flex-row gap-5">
        <div className="bg-beige-100 md:basis-[247px] flex items-center gap-4 p-4 rounded-xl">
          <Pot />
          <div className="flex flex-col gap-[11px]">
            <p className="text-4 text-grey-500">Total Saved</p>
            <p className="text-1">$850</p>
          </div>
        </div>

        <div className="md:basis-[277px] py-1 ">
          <div className="w-full grid grid-cols-2 gap-4">
            {pots.slice(0, 4).map((pot) => (
              <ExpenseCategory
                key={pot.name}
                amount={pot.total}
                category={pot.name}
                backgroundColor={pot.theme}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PotsOverview;
