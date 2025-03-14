import Image from 'next/image';

interface TransactionItemProps {
  avatar: string;
  name: string;
  category: string;
  amount: number;
  date: string;
  recurring: boolean;
}

const TransactionItem = (props: TransactionItemProps) => {
  const { amount, avatar, category, date, name } = props;

  const newDateStr = new Date(date);

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(newDateStr);

  const formattedAmount = amount >= 0 ? `+$${amount}` : `-$${Math.abs(amount)}`;
  const color = amount > 0 ? 'text-green' : amount < 0 ? 'text-grey-900' : '';

  return (
    <div className="py-4 first:pt-0 last:pb-0 border-b border-b-grey-100 last:border-none">
      <div className="flex md:hidden justify-between ">
        <div className="flex items-center gap-x-3 ">
          <Image
            src={avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />

          <div className="flex flex-col gap-y-1 ">
            <span className="text-4-bold">{name}</span>
            <span className="text-5 text-grey-500">{category}</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <span className={`text-4-bold flex justify-end ${color} `}>
            {formattedAmount}
          </span>
          <span className="text-5 text-grey-500">{formattedDate}</span>
        </div>
      </div>

      {/* tablet and mobile */}
      <div className="hidden md:flex items-center gap-8 lg:px-4 ">
        <div className="flex-1 basis-[272px] lg:basis-[428px] flex items-center gap-4">
          <Image
            src={avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-4-bold">{name}</span>
        </div>
        <div className="basis-[80px] lg:basis-[120px]">
          <span className="text-5 text-grey-500">{category}</span>
        </div>
        <div className="basis-[88px] lg:basis-[120px]">
          <span className="text-5 text-grey-500">{formattedDate}</span>
        </div>
        <div className="basis-[88px] lg:basis-[200px] flex justify-end ">
          <span className={`text-4-bold flex justify-end ${color} `}>
            {formattedAmount}
          </span>
        </div>
      </div>
    </div>
  );
};
export default TransactionItem;
