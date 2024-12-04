import Image from "next/image";
import Link from "next/link";
import React from "react";

const ZigmentBrandLabel = () => {
  return (
    <div className="flex justify-center w-100 items-center bg-[#fdf3e8] rounded-lg">
      <div className="w-full max-w-4xl bg-brand-red-50 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="  flex-1">
            <div className="titles">
              <h3
                className="text-[#4b5563] text-xl md:text-2xl font-bold mb-2"
                style={{ fontFamily: "Poppins" }}
              >
                Take your business to the next level!
              </h3>
              <h5 className="cta-description text-[#4b5563] text-base md:text-md mb-4 font-poppins">
                Want to brand your short links, create QR codes, and get
                detailed analytics? Get Zigment for your business and
                super-charge your link management.
              </h5>
            </div>
            <div className="rebrand-link-limit-reached-banner-cta">
              <Link
                href="/contact-us"
                target="_blank"
                className="premium-btn-cta btn-secondary btn-inverted bg-blue-600 text-white py-2 px-4 rounded mr-4"
                style={{
                  backgroundColor: "rgba(255, 101, 89, 0.8)",
                  fontFamily: "'Poppins', sans-serif",
                }}
                rel="noreferrer noopener"
              >
                Try Zigment
              </Link>
              <div className="inline-block">
                <span className="font-small text-[#4b5563]">
                  &nbsp;or&nbsp;
                </span>
                <Link
                  href="/contact-us"
                  className="signup-btn-cta btn-inverted bg-transparent text-[#4b5563] underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-6">
            <Image
              className="max-w-full h-auto"
              src="/InstantEngagement.svg"
              width="200"
              height="175"
              alt="Short link"
              title="Short link"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZigmentBrandLabel;
