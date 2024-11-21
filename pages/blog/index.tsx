import MetaTagsComponents from "@/components/common/meta-tags-components";
import BlogListingPage1 from "@/components/sections/marketing/blog/blog-listing-page1";
import { blogData } from "@/lib/blog/blog-data";
import { BlogI } from "@/lib/types/blog";
import Image from "next/image";
import Link from "next/link";
import { ebookData, EbookI } from "../ebook";

type Props = {
  data: {
    ebooks: EbookI[];
    blogs: BlogI[];
  };
};

export async function getServerSideProps() {
  try {
    const getBlogData = await blogData();
    const getEbookData = await ebookData;
    return {
      props: {
        data: {
          ebooks: getEbookData,
          blogs: getBlogData,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}

function index({ data }: Props) {
  return (
    <section
      style={{
        fontFamily: "Instrument, sans-serif",
      }}
      className={`pt-[100px]  sec_space_bottom1  bg-cover`}
    >
      <MetaTagsComponents
        title="Zigment Blog | AI Sales Engagement Insights & Industry Trends"
        description="Explore expert insights on AI sales automation, workflow optimization, and the future of business engagement. Learn how AI agents are transforming sales and customer interactions."
        keywords="AI sales insights, sales automation blog, business workflow trends, conversational AI updates, sales engagement tips, AI technology insights, enterprise sales automation, AI agent implementation, sales innovation blog"
        url="https://zigment.ai/blog"
      />

      {/* <BlogNav data={data}/> */}
      <section className={``}>
        <div className="pt-[5px] xl:pt-[75px] 2xl:pt-[135px]   !font-colasta container">
          <div className="flex gap-5 md:gap-[40px] flex-col md:flex-row   ">
            <h1
              className="text-[30px] md:text-[40px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] max-w-[410px] 2xl:max-w-[520px] has_fade_anim font-colasta"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
                fontFamily: "colasta, sans-serif",
              }}
            >
              Latest blog &amp; Ebooks
            </h1>
            <div
              className="hidden md:block mt-[58px] xl:mt-[93px] 2xl:mt-[123px] has_fade_anim"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <Image
                alt="shape image"
                loading="lazy"
                width={331}
                height={42}
                decoding="async"
                data-nimg={1}
                className="rtl_y text-primary-100"
                src="/assets/imgs/shape/shape-s-56.png"
                style={{ color: "#10293A", height: "auto" }}
              />
            </div>
            <div
              className="max-w-full md:max-w-[250px] lg:max-w-[410px] ms-auto mt-0 md:mt-[57px] lg:mt-[92px] xl:mt-[102px] 2xl:mt-[132px] has_fade_anim"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <p
                style={{ fontFamily: "Instrument, sans-serif" }}
                className="tracking-wider text-primary font-medium"
              >
                Explore all our blogs, articles, white papers and ebooks here
              </p>
            </div>
          </div>
        </div>

        <section className="space-y-20 sec_space2">
          <BlogListingPage1 data={data.blogs} heading="All Blogs" />
          <section className="relative        container">
            <div className="absolute inset-0">
              <div className="h-1/3  sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
              <div className="text-left">
                <h2
                  className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
                  style={{
                    fontFamily: "Instrument, sans-serif",
                  }}
                >
                  Ebook
                </h2>
              </div>
              <div className="mx-auto mt-8 md:mt-12 grid max-w-lg gap-x-6 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {data.ebooks.map((ebook) => (
                  <div
                    key={ebook.title}
                    className="flex flex-col overflow-hidden   group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-full bg-gray-100 flex items-center justify-center rounded-2xl h-64 mb-6">
                      <Image
                        width={500}
                        height={500}
                        className="h-52 w-full object-contain  group-hover:opacity-50"
                        src={ebook.cover_image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between  px-2">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-800">
                          <Link
                            aria-label={ebook.title}
                            href={`/ebook/${ebook.slug}`}
                            className="hover:underline"
                          >
                            Ebook
                          </Link>
                        </p>
                        <Link
                          href={`/ebook/${ebook.slug}`}
                          className="mt-2 block"
                        >
                          <p className="text-xl font-semibold text-gray-900">
                            {ebook.title}
                          </p>
                        </Link>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0"></div>
                        <div className="">
                          <p className="text-sm  text-gray-600 group-hover:text-indigo-800">
                            <Link
                              href={`/ebook/${ebook.slug}`}
                              className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 relative text-[16px] font-medium gap-[5px] hover:text-theme h-[50px] md:h-[60px]  py-[16px] lg:py-[21px] underline text-primary underline-offset-4 !p-0 "
                            >
                              Learn more
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default index;
