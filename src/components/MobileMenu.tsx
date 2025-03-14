'use client';

import Budgets from '@/assets/icons/sidebar-menu/Budgets';
import Overview from '@/assets/icons/sidebar-menu/Overview';
import Pots from '@/assets/icons/sidebar-menu/Pots';
import RecurringBills from '@/assets/icons/sidebar-menu/RecurringBills';
import Transactions from '@/assets/icons/sidebar-menu/Transactions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const links = [
  {
    link: 'Overview',
    href: '/',
    icon: <Overview />,
  },
  {
    link: 'Transactions',
    href: '/transactions',
    icon: <Transactions />,
  },
  {
    link: 'Budgets',
    href: '/budgets',
    icon: <Budgets />,
  },
  {
    link: 'Pots',
    href: '/pots',
    icon: <Pots />,
  },
  {
    link: 'Recurring Bills',
    href: '/recurring-bills',
    icon: <RecurringBills />,
  },
];

const MobileMenu = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className } = props;
  const pathname = usePathname();

  return (
    <div
      className={twMerge(
        'bg-grey-900 w-full flex justify-between items-center px-4 md:px-10 pt-2 ',
        className
      )}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.link}
          className={twMerge(
            'flex flex-col items-center gap-y-1 pt-2 pb-3 md:pb-0 basis-[104px] ',
            pathname === link.href
              ? ' bg-beige-100 rounded-tl-lg rounded-tr-lg text-grey-900 border-b-4 border-b-green'
              : 'text-grey-300'
          )}
        >
          <span className={pathname === link.href ? 'text-green' : ''}>
            {link.icon}
          </span>
          <span className="hidden md:block">{link.link}</span>
        </Link>
      ))}
    </div>
  );
};
export default MobileMenu;
