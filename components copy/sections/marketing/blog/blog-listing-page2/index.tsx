import { BlogI } from "@/lib/types/blog";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: BlogI[];
  heading: string;
};

const BlogListingPage2 = ({ data, heading }: Props) => {
  return (
    <>
      {data.length > 0 && (
        <section className="relative     container">
          <div className="absolute inset-0">
            <div className="h-1/3   sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-left">
              <h2
                className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
                style={{
                  fontFamily: "Instrument, sans-serif",
                }}
              >
                {heading}
              </h2>

            </div>
            <div className="mx-auto mt-8 md:mt-12 grid max-w-lg gap-x-10 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {data.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden   rounded-3xl group cursor-pointer"
                >
                  <div className="flex-shrink-0  mb-6">
                    <Image
                      width={500}
                      height={500}
                      className="h-64 w-full rounded-2xl object-cover  group-hover:opacity-50"
                      src={post.cover_image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 items-start px-2">
                    <div className="flex-1">
                      <div className="text-sm flex items-center justify-between font-medium text-indigo-800">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:underline"
                        >
                          {post.category_name}
                        </Link>
                        <p className="text-sm text-gray-500">
                          {new Date(post.published_at).toLocaleDateString('en-US', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                      </Link>
                    </div>
                  
                    <Link
                    href={`/blog/${post.slug}`} 
                      className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 relative text-[16px] font-medium gap-[5px] hover:text-theme h-[50px] md:h-[60px]  py-[16px] lg:py-[21px] underline text-primary underline-offset-4 !p-0 "
                    >
                      Learn more 
                      
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogListingPage2;
