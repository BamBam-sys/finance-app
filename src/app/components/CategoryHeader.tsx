import CaretRight from '@/assets/icons/CaretRight';

interface CategoryHeaderTypes {
  category: string;
  text: string;
}

const CategoryHeader = (props: CategoryHeaderTypes) => {
  const { category, text } = props;
  return (
    <div className="flex items-center justify-between">
      <p className="text-2">{category}</p>
      <div className="flex items-center gap-3">
        <button className="text-4">{text}</button>
        <CaretRight />
      </div>
    </div>
  );
};
export default CategoryHeader;
