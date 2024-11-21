import { demo_link, iconsurl } from '@/components/sections/marketing/demo/demo-agent-section'
import Image from 'next/image';
import React from 'react'

type Props = {
    link:demo_link;
    onClick:()=>void
}

const DemoAgentLink = ({link, onClick}: Props) => {
  return (
    <button
      id='demo-link'
      className="demo-link flex items-center p-2 md:p-3  shrink-0  shadow justify-center  rounded-xl space-x-2 bg-gray-100 hover:bg-gray-200 transition-all"
      onClick={onClick}
    >
      <Image
        src={iconsurl[link.title]}
        width={100}
        height={100}
        alt={link.title}
        className="w-6 h-6 md:w-10 md:h-10 object-contain"
      />
    </button>
  )
}

export default DemoAgentLink