import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CategoryCardTypes {
  title: string;
  amount: number;
}

const CategoryCard = (
  props: HTMLAttributes<HTMLDivElement> & CategoryCardTypes
) => {
  const { title, amount, className, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        'basis-[289px] flex-1 p-5 md:p-6 space-y-3 rounded-xl',
        className
      )}
      {...otherProps}
    >
      <p className="text-4">{title}</p>
      <p className="text-1">{amount}</p>
    </div>
  );
};
export default CategoryCard;
