// components/common/meta-tags-components.tsx
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  keywords: string;
  url: string;
};

const MetaTagsComponents = ({ title, description, keywords, url }: Props) => {
  const router = useRouter();

  // Ensure absolute URLs

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://zigment.ai";
  const canonicalUrl = url;
  const imageUrl = `${baseUrl}/Zigment_logo-black.svg`;

  // Calculate language based on route or default to en

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Always include canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta property="og:image:alt" content={title} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:creator" content="@zigment" />
        <meta property="twitter:domain" content="zigment.ai" />
        <meta property="twitter:site" content={process.env.SOCIAL_HANDLE} />
        <meta property="twitter:image" content="/Zigment_logo-black.svg" />
      </Head>
      {![
        "/tools/whatspp-widget",
        "/demo",
        "/tools/easy-copy-extension",
        "/workflows-of-the-future",
        "/lp/ivf",
        "/demo",
        "/tools/url-shortner",
        "/tools/qr-code-generator/url-qr-code",
      ].includes(router.pathname) &&
        !router.pathname.includes("/tools") && <ScrollSmootherComponent />}
    </>
  );
};

export default MetaTagsComponents;
