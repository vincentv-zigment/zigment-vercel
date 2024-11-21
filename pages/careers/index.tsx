 import MetaTagsComponents from '@/components/common/meta-tags-components';
import HeroSection3 from '@/components/sections/common/hero-section3';
import axiosWithoutAuth from '@/lib/axiosAPIwithoutAuth';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';


// Dynamically import components
const JobSection = dynamic(() => import('@/components/sections/marketing/careers/jobs-sections'));


export type JobI = {
  _id: string;
  tags: string[];
  slug: string;
  title: string;
  short_description: string;
  apply_link?: string;
  role_type: string;
  location: string;
  long_description: string;
  created_at_timestamp: number;
};

type Props = {
  data: JobI[];
  meta: {
    title: string;
    description: string;
    keywords: string;
    url: string;
  };
};

export async function getServerSideProps() {
  try {
    const data = await axiosWithoutAuth.get('/cms/job-posts');
    return {
      props: {
        data: data.data,
        meta: {
          title: 'Careers - Zigment.ai | Join the AI revolution!',
          description: 'We are looking for enthusiastic people with any skillsets.',
          keywords: 'Jobs, Careers, Talent, AI, Zigment, AI Jobs, AI Careers, AI, Artificial Intelligence, Zigment.ai, Zigment AI, Zigment Careers, Zigment Jobs',
          url: 'https://www.zigment.ai/careers',
        },
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { data: null, meta: {} } };
  }
}

 
export async function generateMetadata(): Promise<Metadata> {
  // read route params
 
  // fetch data
  const product = {
    title: 'Careers - Zigment.ai | Join the AI revolution!',
    description: 'We are looking for enthusiastic people with any skillsets.',
    keywords: 'Jobs, Careers, Talent, AI, Zigment, AI Jobs, AI Careers, AI, Artificial Intelligence, Zigment.ai, Zigment AI, Zigment Careers, Zigment Jobs',
    url: 'https://www.zigment.ai/careers',
  }
 
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: product.title,
     
  }
}

const career = ({ data, meta }: Props) => {
  return (
    <>
      <MetaTagsComponents
        url={meta.url}
        title={meta.title}
        keywords={meta.keywords}
        description={meta.description}
      />
    <>
    <HeroSection3
      title='Join the AI revolution!'
      description='We are looking for enthusiastic people with any skillsets.'
      show_gradient_background={false}
    >

      <JobSection data={data}/>
    </HeroSection3>
    
      
           
    </>
    </>
  );
};

export default career;