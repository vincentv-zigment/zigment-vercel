import MarkdownToHTML3 from '@/components/common/markdown-to-html3';
import fs from 'fs';
import path from 'path';

type Props = {
  blog_content: string;
};

function PrivacyPolicy({blog_content}:Props) {
  return (
    <>
      <div className='max-w-5xl mx-auto flex flex-col-reverse justify-between lg:flex-row items-center py-10 lg:py-14'>
        <section className=' pt-[100px]   lg:flex   lg:flex-row lg:items-center'>
          <div className='flex-1 markdown-content font-montserrat' style={{fontFamily:`'Montserrat', sans-serif`}}>
            <MarkdownToHTML3 content={blog_content}/>
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;

export async function getStaticProps() {
  // Make sure the path to your markdown folder is correct
  const markdownPath = path.join(process.cwd(), 'assets', 'privacy-policy.md');
  const blog_content = fs.readFileSync(markdownPath, 'utf8');

  return {
      props: {
          blog_content,
      },
  };
}
