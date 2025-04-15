import { RefObject, useEffect } from 'react';

export default function useClickOutside<T extends HTMLElement>(
  refs: RefObject<(T | null)[]>, // expects an array of elements
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      const clickedOutsideAll = refs.current.every(
        (el) => el && !el.contains(e.target as Node)
      );

      if (state && clickedOutsideAll) {
        setState(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [state, setState, refs]);
}
