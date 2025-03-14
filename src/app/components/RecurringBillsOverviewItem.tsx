interface RecurringBillsOverviewItemItemTypes {
  bill: string;
  amount: string;
}
const RecurringBillsOverviewItemItem = (
  props: RecurringBillsOverviewItemItemTypes
) => {
  const { amount, bill } = props;

  const borderColor =
    bill === 'Paid Bills'
      ? 'border-l-green'
      : bill === 'Total Upcoming'
      ? 'border-l-yellow'
      : bill === 'Due Soon'
      ? 'border-l-cyan'
      : '';

  return (
    <div
      className={`px-4 py-5 flex items-center justify-between rounded-lg bg-beige-100 border-l-4 ${borderColor} `}
    >
      <p className="text-4 text-grey-500">{bill}</p>
      <p className="text-4-bold">{amount}</p>
    </div>
  );
};
export default RecurringBillsOverviewItemItem;
