import { categoryItems } from "@/lib/categoryItems";
import Image from "next/image";
import Link from "next/link";

const CategoryFilter = () => {
  return (
    <div className="container mx-auto px-5 lg:px-10 my-5">
      <h3 className="text-3xl font-semibold text-white tracking-tight">Top categories</h3>
      <div className="flex mt-5 overflow-x-scroll no-scrollbar justify-center space-x-8 lg:justify-between lg:px-5">
        {categoryItems.map((item) => (
          <Link
            href={`/stays/?filter=${item.name}`}
            key={item.id}
            className="flex flex-col items-center gap-1"
          >
            <div className="relative w-8 h-8 ">
              <Image
                src={item.imageUrl}
                alt="category image"
                className="w-8 h-8"
                width={24}
                height={24}
              />
            </div>
            <p className="text-xs text-white">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
