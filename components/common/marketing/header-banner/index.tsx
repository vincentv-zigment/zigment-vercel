import React from 'react'

type Props = {
    title:string;
    description:string;
    subtitle:string;
    titleCSS?:string;
    descriptionCSS?:string;
    subtitleCSS?:string;
}

const HeaderBanner = ({
    description,
    subtitle,
    title,
    titleCSS,
    descriptionCSS,
    subtitleCSS 
}: Props) => {
  return (
    <div
        id='header-banner'
        className="mx-12 my-8 rounded-xl overflow-hidden header-banner"
        style={{
          background: "url(https://cdn.zigment.ai/assets/aboutusbg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`text-xl font-semibold  text-gray-400 ${subtitleCSS}`}>{subtitle}</p>
            <h2 className={`mt-1 text-4xl font-black max-w-5xl mx-auto tracking-snug leading-normal text-gray-900 sm:text-5xl lg:text-6xl pb-9 ${titleCSS}`}>
              {title}
            </h2>
            <p className={`mx-auto mt-5 max-w-2xl text-2xl font-medium text-gray-600 ${descriptionCSS}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
  )
}

export default HeaderBanner