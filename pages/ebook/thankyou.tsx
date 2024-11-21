//import CTASection from "@/components/common/marketing/landing-page/cta-section";
import CTASection from '@/components/common/marketing/landing-page/cta-section';
import Head from 'next/head';
import Image from "next/image";


const thankyou = () => {
  return (
    <>
      <>
        <Head>
          <title>Zigment.ai - Thank you </title>
          <meta name="description" content="Thank you for downloading ebook" />
          <meta property="og:title" content="Zigment.ai - Ebook - Thank you page" />
          <meta property="og:description" content="Thank you for downloading the ebook." />
        </Head>
        <div className="h-screen relative mx-auto flex"  >
          <div
            className="flex items-center h-full w-full px-20  "

          >
            <div>
              <h2 className="text-8xl font-bold">Thank You!</h2>
              <p className="mt-2">Your request Ebook will be mailed to you shortly</p>

            </div>
          </div>
          <div className="h-full absolute right-0 top-0">
            <Image width={500} height={500} src="/thankyoubg.svg" className=" h-full object-cover" alt="" />
          </div>
        </div>
        <CTASection />
      </>
    </>
  );
};

export default thankyou;
