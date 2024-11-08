import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {BsChevronDown} from 'react-icons/bs'

import React from 'react'
import NavbarItem from '../navbar-item'
import Link from 'next/link'
import Image from 'next/image'
import { FaWrench } from 'react-icons/fa'

 
 

type Props = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>, 
    menuItems:any
}

export default function Sidebar({open, setOpen, menuItems}:Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[1000] lg:hidden" onClose={setOpen}>
        <div className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className='h-12'>
                            <Image 
                              src={'https://cdn.zigment.ai/assets/zigment_logo_latest.svg'} 
                              alt='zigment_logo' 
                              width={200} 
                              height={200} 
                              className='w-full h-full object-contain'
                              priority
                            />
                        </div>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange-main focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 px-4 h-full flex flex-col  justify-between  "> 
                      <div className="inset-0  sm:px-6 gap-4 flex flex-col">
                        {menuItems.map((x:any,i:number)=>{
                            return (
                              <>
                                {x.href && 
                                  <Link href={x.href} key={i} className='text-lg font-medium flex gap-4 items-center'>
                                    <x.icon className={'w-6 h-6'}/>
                                    {x.name}
                                  </Link>
                                }
                                {
                                  x.subMenu && 
                                  
                                  <NavbarItem menu={x} key={i}/>
                                }
                              </>
                              )
                           
                        })}
                      </div> 
                      <div className='space-y-4 '>
                        <Link
                          href="/demo"
                          className="group w-full mx-auto lg:mx-0 flex items-center justify-center space-x-2.5 bg-brand-orange-main font-semibold text-white rounded-full hover:bg-brand-orange-main hover:text-white border border-brand-orange-main transition duration-200 py-2 px-4 "
                        >

                          <span>View Demo</span>
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
                        <Link href={'/contactus'} className="group w-full mx-auto lg:mx-0 flex items-center justify-center space-x-2.5  font-semibold text-brand-orange-main rounded-full hover:bg-brand-orange-mainbg hover:text-brand-orange-main border border-brand-orange-main transition duration-200 py-2 px-4 ">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
