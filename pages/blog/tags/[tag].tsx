//
import BlogListingPage1 from "@/components/sections/marketing/blog/blog-listing-page1";
import { blogData } from "@/lib/blog/blog-data";
import { BlogI } from "@/lib/types/blog";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";

type Props = {
  data: BlogI[];
  heading: string;
  allblogs: BlogI[];
  tag: string;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const allblogs = await blogData();
    if (context.params && context.params.tag) {
      const blogs = allblogs.filter((x) =>
        x.tags.includes(context.params?.tag as string)
      );
      const heading = `"${context.params?.tag}" Articles`;
      return { props: { data: blogs, heading, allblogs } };
    } else {
      return {
        props: {
          data: allblogs,
          heading: "All Blogs",
          allblogs,
          tag: context.params?.tag ?? "",
        },
      };
    }
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}

function TagsPage({ data, heading, tag }: Props) {
  return (
    <section
      style={{
        fontFamily: "Instrument, sans-serif",
      }}
      className={`pt-[100px]    bg-cover`}
    >

    <>
      <Head>
        <title>Blog</title>
        <link rel="canonical" href={`https://zigment.ai/blog/tags/${tag}`} />
        <meta
          name="description"
          content="Blogs, Articles, and Tips by Zigment.ai"
        />
        <meta
          property="og:title"
          content="Blogs, Articles, and Tips by Zigment.ai"
        />
        <meta
          property="og:description"
          content="Explore all our blogs, articles, white papers and ebooks here"
        />
      </Head>
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
          {/* <BlogNav data={allblogs}/> */}
          <BlogListingPage1 data={data} heading={heading} />
        </section>
    </>
    </section>
  );
}

export default TagsPage;
