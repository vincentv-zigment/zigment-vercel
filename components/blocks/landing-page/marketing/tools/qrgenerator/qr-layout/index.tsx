import { navItems } from '@/pages/tools/qr-code-generator/[id]';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type Props = { children: ReactNode }



const QrLayout = ({ children }: Props) => {
    const { query } = useRouter()

    const findItem = navItems.find((x) => x.slug === query.id)

    return (
        <>
            <div className={`pt-[150px] $    bg-cover`} style={{fontFamily: "colasta, sans-serif"}}>
                <div className='  sec_space_bottom1 !font-colasta container'>

                <nav
                    className="  py-4 w-full "
                    style={{fontFamily: "colasta, sans-serif"}}
                >
                    <div className='mb-10 space-y-4'>
                        <h1 className='text-center font-bold text-4xl  max-w-6xl w-full mx-auto  px-4' style={{fontFamily: "Roboto, sans-serif"}} >
                            {findItem?.label}
                        </h1>
                        <p className='text-center text-sm font-medium text-gray-600 font-roboto' >
                            {findItem?.description}
                        </p>
                    </div>
                    <div className="overflow-x-auto w-full " >
                        <ul className="flex   gap-2 justify-center items-center w-full overflow-x-auto">
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className=" "
                                    onClick={(e) => {
                                        e.preventDefault();
                                        //   handleItemClick(item);
                                    }}
                                >
                                    <Link
                                        href={`/tools/qr-code-generator/${item.slug}`}
                                        className={`block text-center font-semibold  px-4 py-3 text-sm   transition-all border rounded-lg   text-primary duration-300 ease-in-out ${query.id === item.slug ? '    bg-action border-action' : ' border-border hover:border-primary '} `}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className='max-w-6xl w-full mx-auto   pt-8'>
                    {children}
                </div>
                </div>
            </div>
        </>
    )
}

export default QrLayout