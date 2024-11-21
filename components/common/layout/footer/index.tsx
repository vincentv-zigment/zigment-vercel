import Link from "next/link";

import navigation from "@/config/navigation.json";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    id:'linkedin',
    link:'https://www.linkedin.com/company/zigment',
    icon: FaLinkedin
  },
  {
    id:'facebook',
    link:'https://www.facebook.com/zigment',
    icon: FaFacebook
  },
  {
    id:'instagram',
    link:'https://www.instagram.com/zigment.ai',
    icon: FaInstagram
  },
  {
    id:'twitter',
    link:'https://x.com/zigment_ai',
    icon: FaXTwitter
  },
  {
    id:'youtube',
    link:'https://www.youtube.com/@zigment01',
    icon: FaYoutube 
  },
]

const Footer = () => {
  const router = useRouter(); // Initialize useRouter
  const footerNav = navigation.footer;
  if (router.pathname.startsWith("/lp")) {
    return null;
  }
  return (
    <footer className="bg-primary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-[50px] gap-x-[60px] justify-between pt-[58px] pb-[51px] lg:pt-[78px] lg:pb-[71px] 2xl:pt-[128px] 2xl:pb-[121px]">
          <div className="col-span-1 lg:col-span-2">
          <Image
              width={500}
              height={500}
              src={'/Zigment_logo-white.svg'}
              alt={`zigment`}
              priority
              className="w-auto h-12 object-contain"
            />
            <div className="mt-[21px] lg:mt-[31px] xl:mt-[31px] 2xl:mt-[41px]">
              <p className="max-w-[400px] lg:max-w-[300px] text-white-2">
                The AI-Native Sales Engagement Platform
                
              </p>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 flex justify-between flex-wrap gap-y-[50px] gap-x-[60px]">
            {footerNav &&
              footerNav.length &&
              footerNav.slice(0, 3).map((nav, i) => (
                <div key={`footer_nav-${i}`}>
                  <h2 className="text-[20px] xl:text-[24px] !text-white !font-normal">
                    {nav.title}
                  </h2>
                  {nav.children && nav.children.length && (
                    <ul className="mt-[24px]">
                      {nav.children.map((child, j) => (
                        <li
                          key={`child_nav-${i}${j}`}
                          className="text-[18px] text-white-2 leading-[30px]"
                        >
                          <Link href={child.path} className="hover:text-white">
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-x-[60px] gap-y-[10px] py-[38px] flex-col md:flex-row items-center md:items-start border-t border-[#ffffff1a]">
          {socials && socials.length && (
            <ul className="flex gap-6">
              {socials.map((item, i) => (
                <li key={`social_share-${i}`} className="leading-none">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white-2"
                    aria-label={item.id}
                  >
                    <item.icon className="w-5 h-5"/>
                  </Link>
                </li>
              ))}
            </ul>
          )}
            <p className="text-[16px] font-bold text-white-2">
              © Copyright 2024, All Rights Reserved | Zigment.ai
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
