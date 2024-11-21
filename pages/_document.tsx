import { Html, Head, Main, NextScript } from "next/document";


 

export default function Document() {
  return (
    <Html lang="en" >
      <Head>
        <link rel="icon" href="/zigment_thumbnail_logo_black.svg" />
        
        <link rel="preload" href={'https://cdn.zigment.ai/assets/1706524560-HeroImage.svg'} as="image" />
        <link rel="preload" href={'https://cdn.zigment.ai/assets/zigment_logo_latest.svg'} as="image" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
