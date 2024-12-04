//
import BlogListingPage1 from "@/components/sections/marketing/blog/blog-listing-page1";
import { blogData } from "@/lib/blog/blog-data";
import { BlogI } from "@/lib/types/blog";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

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
      {/* <BlogNav data={allblogs}/> */}
      <BlogListingPage1 data={data} heading={heading} />
    </>
  );
}

export default TagsPage;
