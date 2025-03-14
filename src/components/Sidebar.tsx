'use client';

import Logo from '@/assets/icons/Logo';
import Budgets from '@/assets/icons/sidebar-menu/Budgets';
import MinimizeMenu from '@/assets/icons/sidebar-menu/MinimizeMenu';
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

const Sidebar = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className } = props;

  const pathname = usePathname();

  return (
    <section
      className={twMerge(
        'flex-col  bg-grey-900  rounded-tr-[16px] rounded-br-[16px] ',
        className
      )}
    >
      <div>
        <div className="pl-8 py-10">
          <Logo />
        </div>

        <div className="pt-6 flex flex-col space-y-1 pr-6">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={twMerge(
                'flex items-center gap-4 text-3 w-full px-8 py-4 rounded-tr-xl rounded-br-xl  ',
                pathname === link.href
                  ? 'bg-beige-100 text-grey-900 border-l-4 border-l-green'
                  : 'text-grey-300'
              )}
            >
              <span className={pathname === link.href ? 'text-green' : ''}>
                {link.icon}
              </span>
              <span> {link.link}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-end  mb-[58.24px] text-3 w-full px-8 py-4 ">
        <button className="flex items-center gap-4">
          <MinimizeMenu />
          <span className="text-grey-300"> Minimize Menu</span>
        </button>
      </div>
    </section>
  );
};
export default Sidebar;
