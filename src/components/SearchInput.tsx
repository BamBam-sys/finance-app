import SearchIcon from '@/assets/SearchIcon';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SearchInputProps {
  placeholder: string;
}

const SearchInput = (
  props: HTMLAttributes<HTMLDivElement> & SearchInputProps
) => {
  const { placeholder, className } = props;
  return (
    <div
      className={twMerge(
        'flex gap-4 items-center border border-beige-500 rounded-lg py-3 px-5 ',
        className
      )}
    >
      <input
        type="text"
        className="border-none outline-none w-full placeholder:text-4 placeholder:text-beige-500 truncate"
        placeholder={placeholder}
      />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};
export default SearchInput;
