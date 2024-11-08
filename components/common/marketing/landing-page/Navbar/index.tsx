"use client"

import { PencilSquareIcon, SquaresPlusIcon, UserGroupIcon, WrenchIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaCloudDownloadAlt, FaPlay } from "react-icons/fa";
import { MdAutoGraph, MdOutlineSportsBasketball } from 'react-icons/md';
import { RiAdvertisementLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx'; 

import { FaWrench } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { LuWorkflow } from 'react-icons/lu';
import { BiSolidReport } from 'react-icons/bi';
import Logo from './logo';
import FlyoutMenu2 from './flyout-menu';
import TailwindNav from './tailwind-nav';
import Sidebar from './sidebar-item';
 



const menuItems = [
  {
    name: 'Workflows Of The Future',
    href: '/workflows-of-the-future',
    icon: LuWorkflow
  },
  {
    name: 'Solutions',
    icon: FaWrench,
    subMenu: [

      {
        name: 'Lead Automation',
        description: 'Automate Leads, Maximize Conversions',
        href: '/solutions/zigment',
        icon: MdAutoGraph
      }
      ,
      {
        name: 'For Coaches ',
        description: 'Engage More, Stress Less',
        href: '/solutions/coaches',
        icon: MdOutlineSportsBasketball
      },

      {
        name: 'For Advertising ',
        description: 'Turn Ads Into Conversations',
        href: '/solutions/advertising',
        icon: RiAdvertisementLine
      },
      {
        name: 'For Saas',
        description: 'Replace your Chatbot With a Live AI Sales Rep',
        href: '/solutions/saas',
        icon: FaCloudDownloadAlt
      },

    ]
  }, 
  {
    name: 'Resources',
    icons: GrResources,
    subMenu: [
      {
        name: 'About us',
        href: '/aboutus',
        icon: UserGroupIcon,
        description: 'Building the most advanced conversational sales platform',
      },
      {
        name: 'Blogs & Ebooks',
        href: '/blog',
        icon: PencilSquareIcon,
        description: 'Your AI Sales assistant with superhuman abilities',
      },
      {
        name: 'Integrations',
        href: '/integrations',
        icon: SquaresPlusIcon,
        description: "Connect with third-party tools that you're already using",
      },
      {
        name: 'Tools',
        href: '/tools',
        icon: WrenchIcon,
        description: "Get access to our free tools and resources",
      },
      {
        name: 'Demos',
        href: '/demo',
        icon: FaPlay,
        description: "Check out our own Zigment Agent in action ",
      },  
    ]
  }


]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter()

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>

        <nav
          className={`bg-white flex items-center  ${hasScrolled ? 'drop-shadow-md h-[80px]' : 'h-[100px]'}  z-40 fixed w-full duration-50 transition-all overflow-hidden lg:overflow-visible`}
        >
          <div className='w-full px-5 md:px-10 flex items-center   border-slate-300 justify-between h-[80px] z-40 relative bg-white'>
            <Logo  src={'https://cdn.zigment.ai/assets/zigment_logo_latest.svg'} />
            <div className='   items-center hidden lg:flex'>
              {menuItems.map((x, i) => {
                if (x.href) {
                  return (
                    <Link
                      href={x.href}
                      key={`menu_items_key_${x.name}`}
                      className='font-outfit text-md cursor-pointer hover:text-brand-orange-main px-5 '>
                      {x.name}
                    </Link>
                  )
                }
                if (x.subMenu) {
                  if (x.name === 'Solutions') return <FlyoutMenu2 menu={x} key={`submenu_key_${i}`} />
                  else return <TailwindNav menu={x} key={`submenu_key_${i}`} />
                }
              })}

              <Link
                href="/demo"
                className="group mx-auto lg:mx-0 inline-flex items-center space-x-2.5 bg-brand-orange-mainbg font-semibold text-brand-orange-main rounded-full hover:bg-brand-orange-main hover:text-white border border-brand-orange-main transition duration-200 py-2 px-4 "

              >
                <span>Live Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 lg:w-6 lg:h-6 group-hover:fill-brand-blue group-hover:translate-x-2 transition duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Link>

            </div>
            <button className='lg:hidden' onClick={() => setOpen(true)}>  <RxHamburgerMenu size={25} />
            </button>
          </div>

        </nav>
      </header>

      <Sidebar open={open} setOpen={setOpen} menuItems={menuItems} />
    </>
  );
}
