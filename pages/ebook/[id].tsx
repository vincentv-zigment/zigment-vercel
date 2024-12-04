import CTASection from "@/components/common/marketing/landing-page/cta-section";
import DeepDiveSection from "@/components/sections/marketing/ebook/deep-dive-section";
import HeroSection from "@/components/sections/marketing/ebook/hero-section";
import Head from "next/head";
import { EbookI, ebookData } from ".";

interface ContextParams {
  params: {
    id: string;
  };
}

export const getServerSideProps = async (context: ContextParams) => {
  const allEbooks: EbookI[] = ebookData;
  const findEbook = allEbooks.find(
    (data: EbookI) => data.slug === context.params.id
  );
  if (!findEbook) {
    return {
      props: {
        data: {
          _id: "",
          title: "",
          slug: "",
          cover_image: "",
        } as EbookI,
      },
    };
  }

  return {
    props: {
      data: findEbook,
    },
  };
};

type Props = {
  data: EbookI;
};

const page = ({ data }: Props) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.subheading} />
        <meta property="og:title" content={data.title} />
        {/* Always include canonical URL */}
        <link rel="canonical" href={`https://zigment.ai/ebook/${data.slug}`} />
        <meta property="og:description" content={data.subheading} />

        <meta property="og:image" content={data.cover_image} key="ogimage" />
      </Head>
      <div className="single-post-wrapper blog-detail border-b ">
        <div className="single-post-content">
          <HeroSection data={data} />
          <DeepDiveSection data={data} />
          <CTASection />
        </div>
      </div>
    </>
  );
};

export default page;
