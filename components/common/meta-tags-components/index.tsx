// components/common/meta-tags-components.tsx
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
  keywords: string;
  url: string;
};

const MetaTagsComponents = ({ title, description, keywords, url }: Props) => {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content="/Zigment_logo-black.svg"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:creator" content="@zigment" />
      <meta property="twitter:domain" content="zigment.ai" />
      <meta property="twitter:site" content={process.env.SOCIAL_HANDLE} />
      <meta
        property="twitter:image"
        content="/Zigment_logo-black.svg"
      />
    </Head>
    <ScrollSmootherComponent/>
    </>
  );
};

export default MetaTagsComponents;
