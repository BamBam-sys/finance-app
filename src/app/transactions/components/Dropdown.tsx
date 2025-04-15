import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface DropdownProps {
  showDropdown: boolean;
  options: string[];
}

const Dropdown = (props: DropdownProps & HTMLAttributes<HTMLDivElement>) => {
  const { options, showDropdown, className } = props;

  return (
    <div
      className={twMerge(
        'bg-white px-5 py-3 rounded-lg shadow-custom-lg transition-all duration-300 ease-in-out',
        className,
        showDropdown
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      )}
    >
      <ul>
        {options.map((option) => (
          <li
            key={option}
            className="text-4 first:text-4-bold py-3 last:pb-0 border-b border-b-grey-100 last:border-none cursor-pointer"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
