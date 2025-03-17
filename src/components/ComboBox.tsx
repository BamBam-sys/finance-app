import CaretDown from '@/assets/icons/CaretDown';
import { ReactNode } from 'react';

interface ComboBoxProps {
  name: string;
  options: string[];
  mobileIcon: ReactNode;
}

const ComboBox = (props: ComboBoxProps) => {
  const { name, options, mobileIcon } = props;
  return (
    <>
      <div className="hidden md:flex items-center gap-2">
        <span className="text-4 text-beige-500">{name}</span>
        <button className="flex items-center gap-4 py-3 px-5 border border-beige-500 rounded-lg ">
          <span className="text-4  ">{options[0]}</span>
          <CaretDown />
        </button>
      </div>
      <button className="md:hidden">{mobileIcon} </button>
    </>
  );
};
export default ComboBox;
