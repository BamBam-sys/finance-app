'use client';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import TransactionItem from './TransactionItem';
import { twMerge } from 'tailwind-merge';
import data from '@/data.json';

export interface TransactionType {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

const TransactionList = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className } = props;

  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    setTransactions(data.transactions);
  }, []);

  const indexOfLastTransaction = currentPage * postsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - postsPerPage;

  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  return (
    <div className={twMerge('', className)}>
      {currentTransactions.length > 0 ? (
        currentTransactions.map((transaction, index) => (
          <TransactionItem
            key={transaction.name + index}
            amount={transaction.amount}
            avatar={transaction.avatar}
            category={transaction.category}
            date={transaction.date}
            name={transaction.name}
            recurring={transaction.recurring}
          />
        ))
      ) : (
        <p>No available transactions to display</p>
      )}
    </div>
  );
};

export default TransactionList;
