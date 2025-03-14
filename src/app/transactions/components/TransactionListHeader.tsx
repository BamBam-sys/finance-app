const TransactionListHeader = () => {
  return (
    <div className="mt-6 py-3 lg:px-4 hidden md:flex items-center text-5 text-grey-500 gap-8 ">
      <span className="flex-1 basis-[272px] lg:basis-[428px]">
        Recipient / Sender
      </span>
      <span className="basis-[80px] lg:basis-[120px]">Category</span>
      <span className="basis-[88px] lg:basis-[120px]">Transaction Date</span>
      <span className="basis-[88px] lg:basis-[200px] flex justify-end ">
        Amount
      </span>
    </div>
  );
};
export default TransactionListHeader;
