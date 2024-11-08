
import Image from 'next/image'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { LuWrench } from 'react-icons/lu'

type Props = {
  menu: {
    icon: any
    name: string,
    subMenu: { name: string, description?: string, href: string, icon: any }[]
  }
}

function NavbarItem({ menu }: Props) {

  const [open, setOpen] = useState(false)
  return (
    <div>
      <button className='flex items-center gap-2 font-outfit text-md' onClick={() => setOpen(!open)}>
        <span className='flex items-center gap-4 text-lg font-medium'>
          {menu.name === 'Solutions' && <LuWrench className={'w-6 h-6'} />}
          {menu.name === 'Resources' && <IoMdInformationCircleOutline className={'w-6 h-6'} />}
          {menu.name}
        </span>
        <span><BsChevronDown size={10} /></span>
      </button>
      <div className={`${open ? 'block' : 'hidden'}  `}>
        <div className=" max-w-md flex-auto overflow-hidden r  bg-white text-sm leading-6   ">
          <div className="p-1">
            {menu.subMenu.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-200 items-center  ">
                <div className="    h-11 w-11 flex shrink-0  items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                  {typeof item.icon === 'string' && <Image src={item.icon} width={20} height={20} alt='' />}
                  {
                    typeof item.icon !== 'string' &&
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-brand-orange-main" aria-hidden="true" />
                  }

                </div>

                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="  text-gray-600">{item.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarItem