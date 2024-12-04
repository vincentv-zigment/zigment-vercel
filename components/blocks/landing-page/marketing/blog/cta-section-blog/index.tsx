import { BlogI } from "@/lib/types/blog";
import Link from "next/link";

type Props = {
  data: BlogI;
};

const CTASectionblog = ({ data }: Props) => {
  return (
    <section className=" border-y  border-gray-300 my-4 text-center">
       
      <div className="text-left border-t border-gray-300 py-6 md:px-5 flex flex-col md:flex-row md:items-center gap-6 text-[15px]">
        <span className="  uppercase w-16 h-16 flex  items-center justify-center text-3xl font-medium rounded-full bg-gray-200 shrink-0">
          {data.author[0]}
        </span>
        <div>
          <h3 className="font-medium mb-1">{data.author}</h3>
          <p className="text-gray-700">{data.author_description}</p>
        </div>
      </div>
      <div className="flex  gap-3 lg:items-center py-6 px-5 border-t border-gray-300">
        <span className="font-semibold text-xl mt-2 lg:mt-0">Tags</span>
        <div className="flex flex-wrap gap-3">
          {data.tags.map((x) => {
            return (
              <Link
                key={`tag_key_${x}`}
                href={`/blog/tags/${x}`}
                className="border  text-lg text-gray-900 font-medium border-gray-600 bg-gray-100 hover:bg-gray-800 hover:text-white py-2 px-6 rounded-full cursor-pointer"
              >
                {x}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTASectionblog;
