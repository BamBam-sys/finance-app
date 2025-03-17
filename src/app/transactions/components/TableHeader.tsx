import FilterIcon from '@/assets/icons/FilterIcon';
import SortIcon from '@/assets/icons/SortIcon';
import ComboBox from '@/components/ComboBox';
import SearchInput from '@/components/SearchInput';

const sortBy = ['Latest', 'Oldest', 'A to Z', 'Z to A', 'Highest', 'Lowest'];
const category = [
  'All Transactions',
  'Entertainment',
  'Bills',
  'Groceries',
  'Dinning Out',
  'Transportation',
  'Personal Care',
];

const TableHeader = () => {
  return (
    <div className="flex gap-6 justify-between">
      <SearchInput
        placeholder="Search transaction"
        className="basis-[215px] md:basis-[161px] lg:basis-[320px] "
      />

      <div className="flex items-center gap-6 ">
        <ComboBox name="Sort by" options={sortBy} mobileIcon={<SortIcon />} />

        <ComboBox
          name="Category"
          options={category}
          mobileIcon={<FilterIcon />}
        />
      </div>
    </div>
  );
};
export default TableHeader;
