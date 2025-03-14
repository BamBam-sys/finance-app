import Image from 'next/image';

interface TransactionOverviewItemTypes {
  avatar: string;
  name: string;
  amount: number;
  date: string;
}

const TransactionOverviewItem = (props: TransactionOverviewItemTypes) => {
  const { amount, name, date, avatar } = props;

  const newDateStr = new Date(date);

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(newDateStr);

  const formattedAmount = amount >= 0 ? `+$${amount}` : `-$${Math.abs(amount)}`;
  const color = amount > 0 ? 'text-green' : amount < 0 ? 'text-grey-900' : '';

  return (
    <div className="py-5 first:pt-0 last:pb-0 border-b border-b-grey-100 last:border-none ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Image
            alt="Emma Richardson"
            src={avatar}
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-4-bold ">{name}</p>
        </div>

        <div className="flex flex-col items-end gap-y-2">
          <p className={`text-4-bold ${color} `}>{formattedAmount}</p>
          <p className="text-5 text-grey-500">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};
export default TransactionOverviewItem;
