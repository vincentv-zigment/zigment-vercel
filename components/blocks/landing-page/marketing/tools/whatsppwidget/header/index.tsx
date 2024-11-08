import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div 
      className="w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16" 
      style={{
        borderBottomColor: 'rgb(0, 12, 45)',
        borderBottomStyle: 'none',
        borderBottomWidth: '0px',
        borderImageOutset: 0,
        borderImageRepeat: 'stretch',
        borderImageSlice: '100%',
        borderImageSource: 'none',
        borderImageWidth: 1,
        borderLeftColor: 'rgb(0, 12, 45)',
        borderLeftStyle: 'none',
        borderLeftWidth: '0px',
        borderRightColor: 'rgb(0, 12, 45)',
        borderRightStyle: 'none',
        borderRightWidth: '0px',
        borderTopColor: 'rgb(0, 12, 45)',
        borderTopStyle: 'none',
        borderTopWidth: '0px',
        boxSizing: 'border-box',
        color: 'rgb(0, 12, 45)',
        direction: 'ltr',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Google Sans", sans-serif',
        fontFeatureSettings: 'normal',
        fontKerning: 'auto',
        fontOpticalSizing: 'auto',
        fontSize: '16px',
        fontStretch: '100%',
        fontStyle: 'normal',
        fontVariantAlternates: 'normal',
        fontVariantCaps: 'normal',
        fontVariantEastAsian: 'normal',
        fontVariantLigatures: 'normal',
        fontVariantNumeric: 'normal',
        fontVariantPosition: 'normal',
        fontVariationSettings: 'normal',
        fontWeight: 400,
        height: 'auto',
        justifyContent: 'center',
        letterSpacing: 'normal',
        lineHeight: '24px',
        marginBottom: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '0px',
        tabSize: 4,
        textSizeAdjust: '100%',
        unicodeBidi: 'isolate',
        verticalAlign: 'baseline',
        WebkitFontSmoothing: 'antialiased',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}
    >
      <div className="w-fit mb-2 px-3 py-0.5 flex flex-nowrap justify-center items-center lg:text-base font-bold text-green-700 bg-green-200 border border-solid border-green-600" style={{ borderRadius: '50px' }}>
        <h1 className="lg:text-base text-sm pr-1">WhatsApp Chat Widget</h1>
        <span className="w-5 h-5">
          <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0' }}>
            <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
              <Image width={500} height={500} style={{ maxWidth: '100%', display: 'block', margin: '0', border: 'none', padding: '0' }} alt="" aria-hidden="true" role="presentation" src="https://cdn.zigment.ai/assets/WhatsApp.svg.webp"></Image>
            </div>
            <Image width={500} height={500} alt="white-border" src="https://cdn.zigment.ai/assets/WhatsApp.svg.webp" decoding="async" className="ml-2" style={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', boxSizing: 'border-box', padding: '0', border: 'none', margin: 'auto', display: 'block', width: '0', height: '0', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}></Image>
          </div>
        </span>
      </div>
      <h2 className="mb-6 text-2xl md:text-3xl lg:font-bold text-gray-700 text-center">Add a Free WhatsApp Chat Widget to Your Website</h2>
      <p className="mb-4 text-base font-normal text-gray-500 text-center">With Zigment WhatsApp Chat Widget, you can invite your prospects and customers to continue their conversations on the go.</p>
    </div>
  );
};

export default Header;
