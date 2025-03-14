interface ExpenseCategoryTypes {
  category: string;
  amount: number;
  backgroundColor: string;
}

const ExpenseCategory = (props: ExpenseCategoryTypes) => {
  const { backgroundColor, category, amount } = props;

  return (
    <div className="flex gap-x-4 ">
      <div
        className={`h-[43px] basis-1 rounded-lg`}
        style={{ backgroundColor }}
      ></div>
      <div className="flex flex-col gap-y-1">
        <p className="text-5">{category}</p>
        <p className="text-4-bold">{amount}</p>
      </div>
    </div>
  );
};
export default ExpenseCategory;
