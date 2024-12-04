
import BlogBreadCrumbs from '@/components/blocks/landing-page/marketing/blog/blog-bread-crumbs';
import CTASectionblog from '@/components/blocks/landing-page/marketing/blog/cta-section-blog';
import MarkdownToHTML3 from '@/components/common/markdown-to-html3';
import CTASection from '@/components/common/marketing/landing-page/cta-section';
import { BlogI } from '@/lib/types/blog';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';

type Props = {
  blog_content: string
  data: BlogI
}






const BlogDetailComp = ({ data, blog_content }: Props) => {


  const { author, published_at, title, cover_image, category_name, time_to_read, slug } = data
 

  if (!blog_content) return null

  const blogUrl = encodeURIComponent(`https://www.zigment.ai/blog/${slug}`)

  // const router

  return (
    <>
      <section className='pt-4 md:pt-16 sm:px-20 xl:px-0 lg:max-w-7xl mx-auto'>
        <BlogBreadCrumbs data={data} />
        <div className=' mx-auto w-full md:max-w-2xl lg:max-w-3xl '>
          <div className=' bg-white rounded-md flex w-full flex-col justify-center p-8 md:px-10 md:py-[35px]  mx-auto      items-center 
            [&_img]:md:w-full
            [&_img]:w-full
            [&_img]:rounded-md
            [&_img]:mx-auto'>

            <div className='text-center   block w-full'>
              <div className='flex text-center  items-center justify-center gap-2'>
                <Link href={`/blog/categories/${data.category_id}`} className='my-2 md:my-4  font-semibold underline text-indigo-800'>
                  {category_name}
                </Link>
                <span className='no-underline text-gray-800'>{time_to_read} min read</span>
              </div>
              <h2 className='text-3xl md:text-5xl font-bold  '>
                {title}
              </h2>
              <p className='text-gray-500 text-sm my-4 md:my-6'>
                By {author} • {published_at}
              </p>
            </div>
            <div className='flex items-center justify-center gap-4 pb-4   '>
              <span className='font-semibold'>Share :</span>
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`} className='text-gray-400 hover:text-[#1877F2]' target="_blank" rel="noopener noreferrer">
                <FaFacebook className='w-6 h-6' />
              </Link>
              <Link href={`https://twitter.com/intent/tweet?url=${blogUrl}`} className='text-gray-400 hover:text-[#1DA1F2]' target="_blank" rel="noopener noreferrer">
                <FaTwitter className='w-6 h-6' />
              </Link>
              <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`} className='text-gray-400 hover:text-[#0077B5]' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='w-6 h-6' />
              </Link>
            </div>

            <Image src={cover_image} alt='' width={500} height={500} className='w-full h-[400px] object-cover rounded-xl' />
            <MarkdownToHTML3 content={blog_content} />
            <CTASectionblog data={data} />
            <div className='flex items-center justify-center gap-4 pb-4   '>
              <span className='font-semibold'>Share :</span>
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`} className='text-gray-400 hover:text-[#1877F2]' target="_blank" rel="noopener noreferrer">
                <FaFacebook className='w-6 h-6' />
              </Link>
              <Link href={`https://twitter.com/intent/tweet?url=${blogUrl}`} className='text-gray-400 hover:text-[#1DA1F2]' target="_blank" rel="noopener noreferrer">
                <FaTwitter className='w-6 h-6' />
              </Link>
              <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`} className='text-gray-400 hover:text-[#0077B5]' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='w-6 h-6' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}

export default BlogDetailComp



