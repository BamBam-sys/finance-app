import React from 'react';
import { createPortal } from 'react-dom';

const DropDown = () => {
  return createPortal(
    <div className="bg-white px-5 py-3  ">
      <h2 className="text-4-bold text-grey-900 ">Latest</h2>
    </div>,
    document.body
  );
};

export default DropDown;
