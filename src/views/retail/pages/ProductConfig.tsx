import { BiChevronRight } from "react-icons/bi";

const ProductConfig = () => {
  return (
    <div className="flex flex-col h-full w-full bg-red-400 px-3 py-2 gap-4">
      <div className="flex w-fit text-[#848484] items-center text-lg">
        Inventory <BiChevronRight />
        Items
      </div>
      <div className="h3 font-extrabold">Items</div>
    </div>
  );
};

export default ProductConfig;
