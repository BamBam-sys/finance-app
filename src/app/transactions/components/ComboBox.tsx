'use client';
import CaretDown from '@/assets/icons/CaretDown';
import { ReactNode, useRef, useState } from 'react';
import Dropdown from './Dropdown';
import useClickOutside from '@/hooks/useClickOutside';

interface ComboBoxProps {
  name: string;
  options: string[];
  mobileIcon: ReactNode;
}

const ComboBox = (props: ComboBoxProps) => {
  const { name, options, mobileIcon } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  const elements = useRef<HTMLDivElement[]>([]);

  useClickOutside(elements, showDropdown, setShowDropdown);

  const handleToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        ref={(el) => {
          if (el) elements.current[0] = el;
        }}
        className="hidden md:flex items-center gap-2"
      >
        <span className="text-4 text-beige-500">{name}</span>
        <div className="relative flex items-center gap-4 py-3 px-5 border border-beige-500 rounded-lg">
          <span className="text-4">{options[0]}</span>
          <button type="button" onClick={handleToggle}>
            <CaretDown />
          </button>

          {/* dropdown */}
          <Dropdown
            options={options}
            showDropdown={showDropdown}
            className="w-full absolute top-14 left-0"
          />
        </div>
      </div>

      <div
        ref={(el) => {
          if (el) elements.current[1] = el;
        }}
        className="relative md:hidden"
      >
        <button type="button" onClick={handleToggle}>
          {mobileIcon}
        </button>

        {/* dropdown */}
        <Dropdown
          options={options}
          showDropdown={showDropdown}
          className="absolute right-0 w-max"
        />
      </div>
    </div>
  );
};

export default ComboBox;
