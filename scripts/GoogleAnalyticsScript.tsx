import Script from 'next/script';
import React from 'react';

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_TAG_ID}`}
            />
            <Script id='g_tag_id' strategy="afterInteractive">
                {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_G_TAG_ID}');
      `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
