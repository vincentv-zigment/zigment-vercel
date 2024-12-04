import Newsletter3 from "@/components/common/newsletter";
import BlogDetailComp from "@/components/sections/marketing/blog/blog-details-comp";
import { blogData, getMarkdownDataForBlog } from "@/lib/blog/blog-data";
import { BlogI } from "@/lib/types/blog";
import Head from "next/head";

interface Context {
  params: {
    id: string;
  };
}

export const getServerSideProps = async (context: Context) => {
  const allBlogs = await blogData();
  const findBlog = allBlogs.find(
    (blog: BlogI) => blog.slug === context.params.id
  );
  if (!findBlog) {
    return {
      props: {
        blog_content: "",
        blog_data: {},
        allBlogs,
      },
    };
  }

  const blog_content = await getMarkdownDataForBlog(findBlog.slug);

  return {
    props: {
      blog_content,
      blog_data: findBlog,
      allBlogs,
    },
  };
};

type Props = {
  blog_content: string;
  blog_data: BlogI;
  allBlogs: BlogI[];
};

const BlogDetailsPage = ({ blog_content, blog_data }: Props) => {
  const content = blog_content;
  const data = blog_data;
  return (
    <>
      <>
        <Head>
          <title>{data.title}</title>
          <link rel="canonical" href={`https://zigment.ai/blog/${data.slug}`} />
          <meta name="description" content={data.description} />
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={data.description} />
          <meta name="author" content={data.author} />
          <meta property="article:author" content={data.author} />
          <meta property="og:image" content={data.cover_image} key="ogimage" />
        </Head>

        {/* <BlogNav data={allBlogs}/> */}
        <section className="space-y-20 pt-8 md:pt-20 ">
          <BlogDetailComp blog_content={content} data={data} />
        </section>
        <Newsletter3 
          title="Get productivity tips delivered straight to your inbox"
          description="We'll email you 1-2 times per week—and never share your information."
        />
      </>
    </>
  );
};

export default BlogDetailsPage;
