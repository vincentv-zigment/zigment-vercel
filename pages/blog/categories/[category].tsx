//
import BlogListingPage1 from '@/components/sections/marketing/blog/blog-listing-page1';
import { blogData } from '@/lib/blog/blog-data';
import { BlogI } from '@/lib/types/blog';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';


type Props = {
  data: BlogI[],
  heading:string,
  allblogs:BlogI[]
}

export async function getServerSideProps(context:GetServerSidePropsContext) {
  try {
    const allblogs = await blogData();
    if(context.params && context.params.category){
      const blogs = allblogs.filter((x)=>x.category_id===context.params?.category)
      const heading = blogs[0].category_name
      return { props: { data: blogs, heading, allblogs } };
    }else{
      return { props: { data: allblogs, heading:'All Blogs', allblogs } };
    }


  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}





function BlogCategory({ data, heading }: Props) {
 
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blogs, Articles, and Tips by Zigment.ai" />
        <meta property="og:title" content="Blogs, Articles, and Tips by Zigment.ai" />
        <meta property="og:description" content="Explore all our blogs, articles, white papers and ebooks here" />
      </Head>
      {/* <BlogNav data={allblogs}/> */}
      <section className='space-y-20 pt-8 md:pt-20 '>
        <BlogListingPage1 data={data} heading={heading} />
      </section>
    </>
  )
}

export default BlogCategory