import CaretDown from '@/assets/icons/CaretDown';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ComboBoxProps {
  name: string;
  options: string[];
}

const ComboBox = (props: HTMLAttributes<HTMLDivElement> & ComboBoxProps) => {
  const { name, options, className } = props;
  return (
    <div className={twMerge('flex items-center gap-2', className)}>
      <span className="text-4 text-beige-500">{name}</span>
      <button className="flex items-center gap-4 py-3 px-5 border border-beige-500 rounded-lg ">
        <span className="text-4  ">{options[0]}</span>
        <CaretDown />
      </button>
    </div>
  );
};
export default ComboBox;
