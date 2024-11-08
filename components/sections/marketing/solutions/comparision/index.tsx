import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'


type Props = {}

const Comparision = ({ item }: any) => {

  const [open, setOpen] = useState(false)
  return (
    <div key={item.id} className="relative   rounded-xl  p-5 drop-shadow-sm bg-white border border-b space-y-4 
     ">
      <dt className='flex items-center justify-between' onClick={() => setOpen(!open)}>
        <p className="  text-lg font-medium leading-6 text-gray-900">{item.name}</p>

      </dt>
      {

        <dd className="mt-2   text-gray-500">
          {item.description}
        </dd>
      }
    </div>
  )
}

export default Comparision